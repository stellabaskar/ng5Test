import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerHarTvaLjud2Component } from './vokaler-har-tva-ljud2.component';

describe('VokalerHarTvaLjud2Component', () => {
  let component: VokalerHarTvaLjud2Component;
  let fixture: ComponentFixture<VokalerHarTvaLjud2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerHarTvaLjud2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerHarTvaLjud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
