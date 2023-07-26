import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../product-page/product/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[] = [];
  constructor(private shoppingCartService: ShoppingCartService){
  
  }
  ngOnInit(): void {
    this.productList=this.shoppingCartService.productList
  }
}
