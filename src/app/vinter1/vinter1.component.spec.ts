import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinter1Component } from './vinter1.component';

describe('Vinter1Component', () => {
  let component: Vinter1Component;
  let fixture: ComponentFixture<Vinter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vinter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vinter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
