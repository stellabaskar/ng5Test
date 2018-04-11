import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjurensLatenComponent } from './djurens-laten.component';

describe('DjurensLatenComponent', () => {
  let component: DjurensLatenComponent;
  let fixture: ComponentFixture<DjurensLatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjurensLatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjurensLatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
