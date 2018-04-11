import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substantiv1Component } from './substantiv1.component';

describe('Substantiv1Component', () => {
  let component: Substantiv1Component;
  let fixture: ComponentFixture<Substantiv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substantiv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substantiv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
