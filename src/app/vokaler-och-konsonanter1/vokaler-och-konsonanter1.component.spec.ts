import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerOchKonsonanter1Component } from './vokaler-och-konsonanter1.component';

describe('VokalerOchKonsonanter1Component', () => {
  let component: VokalerOchKonsonanter1Component;
  let fixture: ComponentFixture<VokalerOchKonsonanter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerOchKonsonanter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerOchKonsonanter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
