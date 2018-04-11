import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnostormenComponent } from './snostormen.component';

describe('SnostormenComponent', () => {
  let component: SnostormenComponent;
  let fixture: ComponentFixture<SnostormenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnostormenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnostormenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
