import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkattenComponent } from './skatten.component';

describe('SkattenComponent', () => {
  let component: SkattenComponent;
  let fixture: ComponentFixture<SkattenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkattenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkattenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
