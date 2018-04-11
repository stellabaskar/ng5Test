import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Synonymer1Component } from './synonymer1.component';

describe('Synonymer1Component', () => {
  let component: Synonymer1Component;
  let fixture: ComponentFixture<Synonymer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Synonymer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Synonymer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
