import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogierComponent } from './analogier.component';

describe('AnalogierComponent', () => {
  let component: AnalogierComponent;
  let fixture: ComponentFixture<AnalogierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
