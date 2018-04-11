import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarDetSpokadeComponent } from './nar-det-spokade.component';

describe('NarDetSpokadeComponent', () => {
  let component: NarDetSpokadeComponent;
  let fixture: ComponentFixture<NarDetSpokadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarDetSpokadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarDetSpokadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
