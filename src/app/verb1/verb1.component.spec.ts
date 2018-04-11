import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Verb1Component } from './verb1.component';

describe('Verb1Component', () => {
  let component: Verb1Component;
  let fixture: ComponentFixture<Verb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
