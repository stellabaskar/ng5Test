import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLjudet1Component } from './ng-ljudet1.component';

describe('NgLjudet1Component', () => {
  let component: NgLjudet1Component;
  let fixture: ComponentFixture<NgLjudet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLjudet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLjudet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
