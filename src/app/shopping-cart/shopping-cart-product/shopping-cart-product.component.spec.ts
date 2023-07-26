import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductComponent } from './shopping-cart-product.component';

describe('ShoppingCartProductComponent', () => {
  let component: ShoppingCartProductComponent;
  let fixture: ComponentFixture<ShoppingCartProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartProductComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
