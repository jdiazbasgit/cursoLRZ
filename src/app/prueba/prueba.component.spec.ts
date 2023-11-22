import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponent } from './prueba.component';

describe('PruebaComponent', () => {
  let component: PruebaComponent;
  let fixture: ComponentFixture<PruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaComponent]
    });
    fixture = TestBed.createComponent(PruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
