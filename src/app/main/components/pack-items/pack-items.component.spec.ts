import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackItemsComponent } from './pack-items.component';

describe('PackItemsComponent', () => {
  let component: PackItemsComponent;
  let fixture: ComponentFixture<PackItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
