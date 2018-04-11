import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerOchKonsonanter2Component } from './vokaler-och-konsonanter2.component';

describe('VokalerOchKonsonanter2Component', () => {
  let component: VokalerOchKonsonanter2Component;
  let fixture: ComponentFixture<VokalerOchKonsonanter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerOchKonsonanter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerOchKonsonanter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
