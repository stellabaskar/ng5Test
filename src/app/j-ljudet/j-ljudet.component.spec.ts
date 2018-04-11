import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLjudetComponent } from './j-ljudet.component';

describe('JLjudetComponent', () => {
  let component: JLjudetComponent;
  let fixture: ComponentFixture<JLjudetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLjudetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLjudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
