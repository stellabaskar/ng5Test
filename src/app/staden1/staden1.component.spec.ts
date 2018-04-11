import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staden1Component } from './staden1.component';

describe('Staden1Component', () => {
  let component: Staden1Component;
  let fixture: ComponentFixture<Staden1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staden1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staden1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
