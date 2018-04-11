import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnRoligRast1Component } from './en-rolig-rast1.component';

describe('EnRoligRast1Component', () => {
  let component: EnRoligRast1Component;
  let fixture: ComponentFixture<EnRoligRast1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnRoligRast1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnRoligRast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
