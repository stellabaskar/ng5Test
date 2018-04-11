import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadensSuperhjalteComponent } from './stadens-superhjalte.component';

describe('StadensSuperhjalteComponent', () => {
  let component: StadensSuperhjalteComponent;
  let fixture: ComponentFixture<StadensSuperhjalteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadensSuperhjalteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadensSuperhjalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
