import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet2Component } from './sommarlovet2.component';

describe('Sommarlovet2Component', () => {
  let component: Sommarlovet2Component;
  let fixture: ComponentFixture<Sommarlovet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
