import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelodenegocioComponent } from './modelodenegocio.component';

describe('ModelodenegocioComponent', () => {
  let component: ModelodenegocioComponent;
  let fixture: ComponentFixture<ModelodenegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelodenegocioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelodenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
