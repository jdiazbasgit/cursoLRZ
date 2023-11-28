import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2Component } from './hijo2.component';

describe('Hijo2Component', () => {
  let component: Hijo2Component;
  let fixture: ComponentFixture<Hijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
