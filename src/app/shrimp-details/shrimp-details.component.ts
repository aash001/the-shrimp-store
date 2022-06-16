import { Component, Input, OnInit } from '@angular/core';
import { Shrimp } from '../models/shrimp';
import { ShrimpService } from '../shrimp.service';

@Component({
  selector: 'app-shrimp-details',
  templateUrl: './shrimp-details.component.html',
  styleUrls: ['./shrimp-details.component.scss'],
})
export class ShrimpDetailsComponent implements OnInit {
  constructor(private shrimpService: ShrimpService) {}

  ngOnInit(): void {
    this.shrimpService.fetchShrimps().subscribe((response) => {
      this.shrimps = response.shrimps;
    });
  }

  @Input() id?: number;
  @Input() name!: string;
  @Input() image!: string;

  shrimps: Shrimp[] = [];

  reload() {
    window.location.reload;
  }
}
