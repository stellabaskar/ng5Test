import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simhallen1Component } from './simhallen1.component';

describe('Simhallen1Component', () => {
  let component: Simhallen1Component;
  let fixture: ComponentFixture<Simhallen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simhallen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simhallen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
