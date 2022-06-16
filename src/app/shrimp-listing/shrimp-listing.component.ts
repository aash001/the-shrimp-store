import { Component, Input, OnInit } from '@angular/core';
import { ShrimpService } from '../shrimp.service';
import { Shrimp } from '../models/shrimp';

@Component({
  selector: 'app-shrimp-listing',
  templateUrl: './shrimp-listing.component.html',
  styleUrls: ['./shrimp-listing.component.scss'],
})
export class ShrimpListingComponent implements OnInit {
  shrimps: Shrimp[] = [];
  edit: boolean = false;

  @Input() id?: number;
  @Input() name!: string;
  @Input() image!: string;

  constructor(private shrimpService: ShrimpService) {}
  onDeleteShrimp() {
    this.shrimpService.deleteShrimp(this.id).subscribe();
  }

  editShrimp(updatedShrimp: Shrimp) {
    this.shrimpService.editShrimp(updatedShrimp);
  }

  toggleEdit() {
    if (this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  ngOnInit(): void {}
}
