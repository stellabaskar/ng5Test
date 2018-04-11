import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirkusComponent } from './cirkus.component';

describe('CirkusComponent', () => {
  let component: CirkusComponent;
  let fixture: ComponentFixture<CirkusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirkusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
