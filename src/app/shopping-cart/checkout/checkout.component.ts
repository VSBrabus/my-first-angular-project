import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  productList: Product[] = [];
  Math=Math
  constructor(public shoppingCartService: ShoppingCartService){
  }
  ngOnInit(): void {
    this.productList=this.shoppingCartService.productList
  }

}
