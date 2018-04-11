import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homonymer1Component } from './homonymer1.component';

describe('Homonymer1Component', () => {
  let component: Homonymer1Component;
  let fixture: ComponentFixture<Homonymer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homonymer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homonymer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
