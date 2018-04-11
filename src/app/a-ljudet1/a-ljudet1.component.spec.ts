import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALjudet1Component } from './a-ljudet1.component';

describe('ALjudet1Component', () => {
  let component: ALjudet1Component;
  let fixture: ComponentFixture<ALjudet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALjudet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALjudet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
