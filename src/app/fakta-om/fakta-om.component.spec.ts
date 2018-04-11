import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaOmComponent } from './fakta-om.component';

describe('FaktaOmComponent', () => {
  let component: FaktaOmComponent;
  let fixture: ComponentFixture<FaktaOmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaktaOmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
