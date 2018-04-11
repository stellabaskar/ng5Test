import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analogier1Component } from './analogier1.component';

describe('Analogier1Component', () => {
  let component: Analogier1Component;
  let fixture: ComponentFixture<Analogier1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analogier1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analogier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
