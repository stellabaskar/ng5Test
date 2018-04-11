import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerHarTvaLjud3Component } from './vokaler-har-tva-ljud3.component';

describe('VokalerHarTvaLjud3Component', () => {
  let component: VokalerHarTvaLjud3Component;
  let fixture: ComponentFixture<VokalerHarTvaLjud3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerHarTvaLjud3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerHarTvaLjud3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
