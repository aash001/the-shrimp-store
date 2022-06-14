import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpDetailsComponent } from './shrimp-details.component';

describe('ShrimpDetailsComponent', () => {
  let component: ShrimpDetailsComponent;
  let fixture: ComponentFixture<ShrimpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrimpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrimpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
