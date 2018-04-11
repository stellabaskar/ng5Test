import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLjudet2Component } from './ng-ljudet2.component';

describe('NgLjudet2Component', () => {
  let component: NgLjudet2Component;
  let fixture: ComponentFixture<NgLjudet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLjudet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLjudet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
