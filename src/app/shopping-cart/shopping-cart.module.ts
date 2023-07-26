import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartProductComponent } from './shopping-cart-product/shopping-cart-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartProductComponent, CheckoutComponent, CheckoutItemComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }