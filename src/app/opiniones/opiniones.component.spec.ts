import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesComponent } from './opiniones.component';

describe('OpinionesComponent', () => {
  let component: OpinionesComponent;
  let fixture: ComponentFixture<OpinionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
