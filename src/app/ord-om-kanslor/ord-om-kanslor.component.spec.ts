import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdOmKanslorComponent } from './ord-om-kanslor.component';

describe('OrdOmKanslorComponent', () => {
  let component: OrdOmKanslorComponent;
  let fixture: ComponentFixture<OrdOmKanslorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdOmKanslorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdOmKanslorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
