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

  edit: boolean = false;

  addShrimp(newShrimp: Shrimp) {
    this.shrimpService.addShrimp(newShrimp);
  }

  reload() {
    window.location.reload;
  }

  toggleEdit() {
    if (this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }
}
