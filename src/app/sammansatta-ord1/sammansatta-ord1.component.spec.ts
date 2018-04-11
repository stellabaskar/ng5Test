import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SammansattaOrd1Component } from './sammansatta-ord1.component';

describe('SammansattaOrd1Component', () => {
  let component: SammansattaOrd1Component;
  let fixture: ComponentFixture<SammansattaOrd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SammansattaOrd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SammansattaOrd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
