import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadensSuperhjalte1Component } from './stadens-superhjalte1.component';

describe('StadensSuperhjalte1Component', () => {
  let component: StadensSuperhjalte1Component;
  let fixture: ComponentFixture<StadensSuperhjalte1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadensSuperhjalte1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadensSuperhjalte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
