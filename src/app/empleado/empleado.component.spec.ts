import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoComponent } from './empleado.component';

describe('EmpleadoComponent', () => {
  let component: EmpleadoComponent;
  let fixture: ComponentFixture<EmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoComponent]
    });
    fixture = TestBed.createComponent(EmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
