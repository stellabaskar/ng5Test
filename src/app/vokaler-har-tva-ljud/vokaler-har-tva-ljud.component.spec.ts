import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalerHarTvaLjudComponent } from './vokaler-har-tva-ljud.component';

describe('VokalerHarTvaLjudComponent', () => {
  let component: VokalerHarTvaLjudComponent;
  let fixture: ComponentFixture<VokalerHarTvaLjudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokalerHarTvaLjudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalerHarTvaLjudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
