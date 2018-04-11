import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet21Component } from './sommarlovet2-1.component';

describe('Sommarlovet21Component', () => {
  let component: Sommarlovet21Component;
  let fixture: ComponentFixture<Sommarlovet21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
