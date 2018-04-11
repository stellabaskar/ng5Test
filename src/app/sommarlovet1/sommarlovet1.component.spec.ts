import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet1Component } from './sommarlovet1.component';

describe('Sommarlovet1Component', () => {
  let component: Sommarlovet1Component;
  let fixture: ComponentFixture<Sommarlovet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
