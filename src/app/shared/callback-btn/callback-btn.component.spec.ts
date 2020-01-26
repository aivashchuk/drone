import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackBtnComponent } from './callback-btn.component';

describe('CallbackBtnComponent', () => {
  let component: CallbackBtnComponent;
  let fixture: ComponentFixture<CallbackBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
