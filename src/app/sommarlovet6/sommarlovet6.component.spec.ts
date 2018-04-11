import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet6Component } from './sommarlovet6.component';

describe('Sommarlovet6Component', () => {
  let component: Sommarlovet6Component;
  let fixture: ComponentFixture<Sommarlovet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
