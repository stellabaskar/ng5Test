import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adjektiv1Component } from './adjektiv1.component';

describe('Adjektiv1Component', () => {
  let component: Adjektiv1Component;
  let fixture: ComponentFixture<Adjektiv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adjektiv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adjektiv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
