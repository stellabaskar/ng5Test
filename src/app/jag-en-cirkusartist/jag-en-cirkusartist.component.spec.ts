import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JagEnCirkusartistComponent } from './jag-en-cirkusartist.component';

describe('JagEnCirkusartistComponent', () => {
  let component: JagEnCirkusartistComponent;
  let fixture: ComponentFixture<JagEnCirkusartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JagEnCirkusartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JagEnCirkusartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
