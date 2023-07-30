import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../product-page/product/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[] = [];
  productsWithQuantity: { product: Product; quantity: number }[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.productList = this.shoppingCartService.productList;

    this.calculateProductsWithQuantity();
  }

  calculateProductsWithQuantity() {
    this.productList.forEach((productInCart) => {
      if (this.productsWithQuantity.length === 0) {
        this.productsWithQuantity.push({ product: productInCart, quantity: 1 });
      } else {
        let productAlreadyAdded = false;
        this.productsWithQuantity.forEach((productWithQuantity) => {
          if (
            productInCart.id === productWithQuantity.product.id &&
            productInCart.volume === productWithQuantity.product.volume &&
            productInCart.addSugar === productWithQuantity.product.addSugar
          ) {
            productAlreadyAdded = true;
            productWithQuantity.quantity += 1;
          }
        });

        if (!productAlreadyAdded) {
          this.productsWithQuantity.push({
            product: productInCart,
            quantity: 1,
          });
        }
      }
    });

    console.log(this.productsWithQuantity);
  }
}
