import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpListingComponent } from './shrimp-listing.component';

describe('ShrimpListingComponent', () => {
  let component: ShrimpListingComponent;
  let fixture: ComponentFixture<ShrimpListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrimpListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrimpListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
