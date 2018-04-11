import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjurComponent } from './djur.component';

describe('DjurComponent', () => {
  let component: DjurComponent;
  let fixture: ComponentFixture<DjurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
