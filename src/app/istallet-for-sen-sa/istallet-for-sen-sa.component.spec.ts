import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstalletForSenSaComponent } from './istallet-for-sen-sa.component';

describe('IstalletForSenSaComponent', () => {
  let component: IstalletForSenSaComponent;
  let fixture: ComponentFixture<IstalletForSenSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstalletForSenSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstalletForSenSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
