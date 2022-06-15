import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShrimpComponent } from './edit-shrimp.component';

describe('EditShrimpComponent', () => {
  let component: EditShrimpComponent;
  let fixture: ComponentFixture<EditShrimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShrimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
