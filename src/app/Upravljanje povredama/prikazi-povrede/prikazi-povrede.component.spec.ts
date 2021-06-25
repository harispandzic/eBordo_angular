import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikaziPovredeComponent } from './prikazi-povrede.component';

describe('PrikaziPovredeComponent', () => {
  let component: PrikaziPovredeComponent;
  let fixture: ComponentFixture<PrikaziPovredeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikaziPovredeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikaziPovredeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
