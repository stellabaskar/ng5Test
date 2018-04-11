import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomonymerComponent } from './homonymer.component';

describe('HomonymerComponent', () => {
  let component: HomonymerComponent;
  let fixture: ComponentFixture<HomonymerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomonymerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomonymerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
