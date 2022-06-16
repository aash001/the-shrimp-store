import { Component } from '@angular/core';
import { Shrimp } from '../models/shrimp';
import { ShrimpService } from '../shrimp.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-shrimp',
  templateUrl: './add-shrimp.component.html',
  styleUrls: ['./add-shrimp.component.scss'],
})
export class AddShrimpComponent {
  constructor(private shrimpService: ShrimpService) {}
  shrimps: Shrimp[] = [];

  addShrimp(newShrimp: Shrimp) {
    this.shrimpService.addShrimp(newShrimp);
  }

  reload() {
    window.location.reload;
  }
}
