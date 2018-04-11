import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerOchKonsonanterComponent } from './vokaler-och-konsonanter.component';

describe('VokalerOchKonsonanterComponent', () => {
  let component: VokalerOchKonsonanterComponent;
  let fixture: ComponentFixture<VokalerOchKonsonanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerOchKonsonanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerOchKonsonanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
