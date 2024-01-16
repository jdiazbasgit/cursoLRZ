import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemanuelComponent } from './homemanuel.component';

describe('HomemanuelComponent', () => {
  let component: HomemanuelComponent;
  let fixture: ComponentFixture<HomemanuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomemanuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomemanuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
