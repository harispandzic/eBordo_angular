import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiPovredaComponent } from './detalji-povreda.component';

describe('DetaljiPovredaComponent', () => {
  let component: DetaljiPovredaComponent;
  let fixture: ComponentFixture<DetaljiPovredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiPovredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiPovredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
