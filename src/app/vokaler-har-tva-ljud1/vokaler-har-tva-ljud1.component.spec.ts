import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerHarTvaLjud1Component } from './vokaler-har-tva-ljud1.component';

describe('VokalerHarTvaLjud1Component', () => {
  let component: VokalerHarTvaLjud1Component;
  let fixture: ComponentFixture<VokalerHarTvaLjud1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerHarTvaLjud1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerHarTvaLjud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
