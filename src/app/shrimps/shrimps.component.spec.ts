import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpsComponent } from './shrimps.component';

describe('ShrimpsComponent', () => {
  let component: ShrimpsComponent;
  let fixture: ComponentFixture<ShrimpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrimpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
