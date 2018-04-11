import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet41Component } from './sommarlovet4-1.component';

describe('Sommarlovet41Component', () => {
  let component: Sommarlovet41Component;
  let fixture: ComponentFixture<Sommarlovet41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
