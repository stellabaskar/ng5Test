import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarDetSpokade1Component } from './nar-det-spokade1.component';

describe('NarDetSpokade1Component', () => {
  let component: NarDetSpokade1Component;
  let fixture: ComponentFixture<NarDetSpokade1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarDetSpokade1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarDetSpokade1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
