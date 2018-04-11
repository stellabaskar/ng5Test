import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerOchKonsonanter3Component } from './vokaler-och-konsonanter3.component';

describe('VokalerOchKonsonanter3Component', () => {
  let component: VokalerOchKonsonanter3Component;
  let fixture: ComponentFixture<VokalerOchKonsonanter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerOchKonsonanter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerOchKonsonanter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
