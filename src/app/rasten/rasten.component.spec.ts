import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastenComponent } from './rasten.component';

describe('RastenComponent', () => {
  let component: RastenComponent;
  let fixture: ComponentFixture<RastenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
