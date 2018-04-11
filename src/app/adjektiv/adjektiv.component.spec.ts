import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjektivComponent } from './adjektiv.component';

describe('AdjektivComponent', () => {
  let component: AdjektivComponent;
  let fixture: ComponentFixture<AdjektivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjektivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjektivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
