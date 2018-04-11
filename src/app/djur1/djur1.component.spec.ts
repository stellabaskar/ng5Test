import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Djur1Component } from './djur1.component';

describe('Djur1Component', () => {
  let component: Djur1Component;
  let fixture: ComponentFixture<Djur1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Djur1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Djur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
