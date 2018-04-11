import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimhallenComponent } from './simhallen.component';

describe('SimhallenComponent', () => {
  let component: SimhallenComponent;
  let fixture: ComponentFixture<SimhallenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimhallenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimhallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
