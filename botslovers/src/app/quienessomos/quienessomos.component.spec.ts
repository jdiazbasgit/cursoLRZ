import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienessomosComponent } from './quienessomos.component';

describe('QuienessomosComponent', () => {
  let component: QuienessomosComponent;
  let fixture: ComponentFixture<QuienessomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienessomosComponent]
    });
    fixture = TestBed.createComponent(QuienessomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
