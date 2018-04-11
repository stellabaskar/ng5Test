import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaOmEttDjurComponent } from './fakta-om-ett-djur.component';

describe('FaktaOmEttDjurComponent', () => {
  let component: FaktaOmEttDjurComponent;
  let fixture: ComponentFixture<FaktaOmEttDjurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaktaOmEttDjurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaOmEttDjurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
