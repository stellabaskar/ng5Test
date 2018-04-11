import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sommarlovet5Component } from './sommarlovet5.component';

describe('Sommarlovet5Component', () => {
  let component: Sommarlovet5Component;
  let fixture: ComponentFixture<Sommarlovet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sommarlovet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sommarlovet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
