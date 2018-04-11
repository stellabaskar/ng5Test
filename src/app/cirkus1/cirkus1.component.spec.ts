import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirkus1Component } from './cirkus1.component';

describe('Cirkus1Component', () => {
  let component: Cirkus1Component;
  let fixture: ComponentFixture<Cirkus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cirkus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cirkus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
