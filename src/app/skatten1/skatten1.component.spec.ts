import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skatten1Component } from './skatten1.component';

describe('Skatten1Component', () => {
  let component: Skatten1Component;
  let fixture: ComponentFixture<Skatten1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skatten1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skatten1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
