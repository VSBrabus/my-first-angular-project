import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ShoppingCartService,
    ProductsService
  ]
})
export class AppComponent {
  title = 'my-first-project';
 
  constructor(private shoppingCartService: ShoppingCartService){
    
  }

}
