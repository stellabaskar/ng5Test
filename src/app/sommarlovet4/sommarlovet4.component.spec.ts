import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet4Component } from './sommarlovet4.component';

describe('Sommarlovet4Component', () => {
  let component: Sommarlovet4Component;
  let fixture: ComponentFixture<Sommarlovet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
