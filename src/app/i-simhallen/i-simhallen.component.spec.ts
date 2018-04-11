import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISimhallenComponent } from './i-simhallen.component';

describe('ISimhallenComponent', () => {
  let component: ISimhallenComponent;
  let fixture: ComponentFixture<ISimhallenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISimhallenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISimhallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
