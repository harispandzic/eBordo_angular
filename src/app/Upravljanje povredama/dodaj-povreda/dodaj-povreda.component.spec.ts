import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPovredaComponent } from './dodaj-povreda.component';

describe('DodajPovredaComponent', () => {
  let component: DodajPovredaComponent;
  let fixture: ComponentFixture<DodajPovredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajPovredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPovredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
