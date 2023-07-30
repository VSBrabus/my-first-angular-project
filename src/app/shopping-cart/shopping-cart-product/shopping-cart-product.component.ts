import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product-page/product/product.model';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css']
})
export class ShoppingCartProductComponent {
  @Input() product:Product

  @Input() quantity: number
}
