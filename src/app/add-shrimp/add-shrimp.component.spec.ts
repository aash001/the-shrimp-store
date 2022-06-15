import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShrimpComponent } from './add-shrimp.component';

describe('AddShrimpComponent', () => {
  let component: AddShrimpComponent;
  let fixture: ComponentFixture<AddShrimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShrimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
