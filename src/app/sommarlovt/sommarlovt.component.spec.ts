import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommarlovtComponent } from './sommarlovt.component';

describe('SommarlovtComponent', () => {
  let component: SommarlovtComponent;
  let fixture: ComponentFixture<SommarlovtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommarlovtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommarlovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
