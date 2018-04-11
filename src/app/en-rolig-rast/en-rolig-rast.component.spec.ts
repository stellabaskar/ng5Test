import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnRoligRastComponent } from './en-rolig-rast.component';

describe('EnRoligRastComponent', () => {
  let component: EnRoligRastComponent;
  let fixture: ComponentFixture<EnRoligRastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnRoligRastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnRoligRastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
