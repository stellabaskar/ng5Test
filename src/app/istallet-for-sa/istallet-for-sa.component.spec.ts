import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstalletForSaComponent } from './istallet-for-sa.component';

describe('IstalletForSaComponent', () => {
  let component: IstalletForSaComponent;
  let fixture: ComponentFixture<IstalletForSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstalletForSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstalletForSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
