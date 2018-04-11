import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rasten1Component } from './rasten1.component';

describe('Rasten1Component', () => {
  let component: Rasten1Component;
  let fixture: ComponentFixture<Rasten1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rasten1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rasten1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
