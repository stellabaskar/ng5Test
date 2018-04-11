import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SammansattaOrdComponent } from './sammansatta-ord.component';

describe('SammansattaOrdComponent', () => {
  let component: SammansattaOrdComponent;
  let fixture: ComponentFixture<SammansattaOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SammansattaOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SammansattaOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
