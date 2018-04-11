import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattOrdPaKanslorComponent } from './satt-ord-pa-kanslor.component';

describe('SattOrdPaKanslorComponent', () => {
  let component: SattOrdPaKanslorComponent;
  let fixture: ComponentFixture<SattOrdPaKanslorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattOrdPaKanslorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattOrdPaKanslorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
