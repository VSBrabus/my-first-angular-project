import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent {
  @Input() product:Product
}
