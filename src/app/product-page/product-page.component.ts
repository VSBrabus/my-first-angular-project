import { Component } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productList: Product[] = [
    new Product("Extra Latte", 7.99, "assets/images/Cup1.png", "", false, true,),
    new Product("Cappuccino", 9.99, "assets/images/Cup2.png","", false, false),
    new Product("Mochaccino", 7.98, "assets/images/Cup3.png","", false, false),
  ];

  
}
