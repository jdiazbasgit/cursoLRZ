import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeograficosComponent } from './geograficos.component';

describe('GeograficosComponent', () => {
  let component: GeograficosComponent;
  let fixture: ComponentFixture<GeograficosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeograficosComponent]
    });
    fixture = TestBed.createComponent(GeograficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
