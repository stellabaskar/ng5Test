import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet31Component } from './sommarlovet3-1.component';

describe('Sommarlovet31Component', () => {
  let component: Sommarlovet31Component;
  let fixture: ComponentFixture<Sommarlovet31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
