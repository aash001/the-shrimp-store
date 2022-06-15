import { Injectable } from '@angular/core';
import { Shrimp } from './models/shrimp';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

type ShrimpsResponse = {
  shrimps: Shrimp[];
};
type ShrimpResponse = {
  shrimp: Shrimp;
};

const shrimpsEndPoint = `${environment.baseApiUrl}/api/shrimps`;

@Injectable({
  providedIn: 'root',
})
export class ShrimpService {
  shrimps: Shrimp[] = [];

  constructor(private http: HttpClient) {}
  fetchShrimps() {
    return this.http.get<ShrimpsResponse>(shrimpsEndPoint);
  }

  addShrimp(shrimp: Shrimp) {
    return this.http
      .post<ShrimpResponse>(shrimpsEndPoint, shrimp)
      .subscribe((response) => {
        this.shrimps = [response.shrimp, ...this.shrimps];
      });
  }

  editShrimp(shrimp: Shrimp) {
    return this.http
      .put<ShrimpResponse>(`${shrimpsEndPoint}/${shrimp.id}`, shrimp)
      .subscribe((response) => {
        this.shrimps = [response.shrimp];
      });
  }

  GetShrimpById(id: number): Observable<Shrimp> {
    return this.http.get<Shrimp>(`${shrimpsEndPoint}/${id}`);
  }

  deleteShrimp(id: any) {
    return this.http.delete<Shrimp>(`${shrimpsEndPoint}/${id}`);
  }
}
