import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymerComponent } from './synonymer.component';

describe('SynonymerComponent', () => {
  let component: SynonymerComponent;
  let fixture: ComponentFixture<SynonymerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
