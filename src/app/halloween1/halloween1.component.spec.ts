import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Halloween1Component } from './halloween1.component';

describe('Halloween1Component', () => {
  let component: Halloween1Component;
  let fixture: ComponentFixture<Halloween1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Halloween1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halloween1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
