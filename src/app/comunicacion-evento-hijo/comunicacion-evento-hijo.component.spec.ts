import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionEventoHijoComponent } from './comunicacion-evento-hijo.component';

describe('ComunicacionEventoHijoComponent', () => {
  let component: ComunicacionEventoHijoComponent;
  let fixture: ComponentFixture<ComunicacionEventoHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunicacionEventoHijoComponent]
    });
    fixture = TestBed.createComponent(ComunicacionEventoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
