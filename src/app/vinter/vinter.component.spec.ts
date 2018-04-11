import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinterComponent } from './vinter.component';

describe('VinterComponent', () => {
  let component: VinterComponent;
  let fixture: ComponentFixture<VinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
