import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstantivComponent } from './substantiv.component';

describe('SubstantivComponent', () => {
  let component: SubstantivComponent;
  let fixture: ComponentFixture<SubstantivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstantivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstantivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
