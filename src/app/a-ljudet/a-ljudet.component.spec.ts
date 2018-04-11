import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALjudetComponent } from './a-ljudet.component';

describe('ALjudetComponent', () => {
  let component: ALjudetComponent;
  let fixture: ComponentFixture<ALjudetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALjudetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALjudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
