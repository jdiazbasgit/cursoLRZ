import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionEventoPadreComponent } from './comunicacion-evento-padre.component';

describe('ComunicacionEventoPadreComponent', () => {
  let component: ComunicacionEventoPadreComponent;
  let fixture: ComponentFixture<ComunicacionEventoPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunicacionEventoPadreComponent]
    });
    fixture = TestBed.createComponent(ComunicacionEventoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
