import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPresentComponent } from './top-present.component';

describe('TopPresentComponent', () => {
  let component: TopPresentComponent;
  let fixture: ComponentFixture<TopPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
