import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Snostormen1Component } from './snostormen1.component';

describe('Snostormen1Component', () => {
  let component: Snostormen1Component;
  let fixture: ComponentFixture<Snostormen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Snostormen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Snostormen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
