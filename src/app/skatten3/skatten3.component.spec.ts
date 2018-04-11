import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skatten3Component } from './skatten3.component';

describe('Skatten3Component', () => {
  let component: Skatten3Component;
  let fixture: ComponentFixture<Skatten3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skatten3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skatten3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
