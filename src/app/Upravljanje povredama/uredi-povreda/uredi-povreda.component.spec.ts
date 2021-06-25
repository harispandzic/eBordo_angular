import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrediPovredaComponent } from './uredi-povreda.component';

describe('UrediPovredaComponent', () => {
  let component: UrediPovredaComponent;
  let fixture: ComponentFixture<UrediPovredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrediPovredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrediPovredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
