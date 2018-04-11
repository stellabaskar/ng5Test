import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALjudet2Component } from './a-ljudet2.component';

describe('ALjudet2Component', () => {
  let component: ALjudet2Component;
  let fixture: ComponentFixture<ALjudet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALjudet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALjudet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
