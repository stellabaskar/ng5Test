import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLjudet1Component } from './j-ljudet1.component';

describe('JLjudet1Component', () => {
  let component: JLjudet1Component;
  let fixture: ComponentFixture<JLjudet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLjudet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLjudet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
