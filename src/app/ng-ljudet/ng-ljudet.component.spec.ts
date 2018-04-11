import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLjudetComponent } from './ng-ljudet.component';

describe('NgLjudetComponent', () => {
  let component: NgLjudetComponent;
  let fixture: ComponentFixture<NgLjudetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLjudetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLjudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
