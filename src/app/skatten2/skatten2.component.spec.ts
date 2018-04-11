import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skatten2Component } from './skatten2.component';

describe('Skatten2Component', () => {
  let component: Skatten2Component;
  let fixture: ComponentFixture<Skatten2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skatten2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skatten2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
