import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionComponent } from './solucion.component';

describe('SolucionComponent', () => {
  let component: SolucionComponent;
  let fixture: ComponentFixture<SolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolucionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
