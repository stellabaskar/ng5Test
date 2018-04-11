import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLjudet2Component } from './j-ljudet2.component';

describe('JLjudet2Component', () => {
  let component: JLjudet2Component;
  let fixture: ComponentFixture<JLjudet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLjudet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLjudet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
