import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../product-page/product/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  

})
export class HeaderComponent implements OnInit{
  shoppingCart: Product[];
  constructor(private shoppingCartService: ShoppingCartService){
    
  }
  ngOnInit(): void {
      this.shoppingCart=this.shoppingCartService.productList
  }
}
