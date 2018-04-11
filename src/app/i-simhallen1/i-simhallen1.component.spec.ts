import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISimhallen1Component } from './i-simhallen1.component';

describe('ISimhallen1Component', () => {
  let component: ISimhallen1Component;
  let fixture: ComponentFixture<ISimhallen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISimhallen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISimhallen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
