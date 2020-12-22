import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnotfoundComponent } from './productnotfound.component';

describe('ProductnotfoundComponent', () => {
  let component: ProductnotfoundComponent;
  let fixture: ComponentFixture<ProductnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
