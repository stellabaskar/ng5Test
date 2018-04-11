import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet3Component } from './sommarlovet3.component';

describe('Sommarlovet3Component', () => {
  let component: Sommarlovet3Component;
  let fixture: ComponentFixture<Sommarlovet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
