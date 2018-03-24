import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsGroupSelectComponent } from './goods-group-select.component';

describe('GoodsGroupSelectComponent', () => {
  let component: GoodsGroupSelectComponent;
  let fixture: ComponentFixture<GoodsGroupSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
