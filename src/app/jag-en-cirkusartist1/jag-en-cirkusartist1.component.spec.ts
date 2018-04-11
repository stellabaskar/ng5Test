import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JagEnCirkusartist1Component } from './jag-en-cirkusartist1.component';

describe('JagEnCirkusartist1Component', () => {
  let component: JagEnCirkusartist1Component;
  let fixture: ComponentFixture<JagEnCirkusartist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JagEnCirkusartist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JagEnCirkusartist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
