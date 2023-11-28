import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaComponent } from './papa.component';

describe('PapaComponent', () => {
  let component: PapaComponent;
  let fixture: ComponentFixture<PapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
