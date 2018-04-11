import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudComponent } from './ljud.component';

describe('LjudComponent', () => {
  let component: LjudComponent;
  let fixture: ComponentFixture<LjudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
