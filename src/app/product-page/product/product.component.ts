import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  @Input() product: Product;
  @Output() openProductInfoEvent: EventEmitter<Product> = new EventEmitter<Product>()

  onSubmit() {
    console.log('Product Name:', this.product.name);
    console.log('Product Price:', this.product.getPrice());
    console.log('Selected Size:', this.product.volume);
    console.log('Add Sugar:', this.product.addSugar);
  }

  addToCart(addedProduct: Product) {
    let addedProductCopy = new Product(
      addedProduct.id,
      addedProduct.name,
      addedProduct.imgUrl,
      addedProduct.volume,
      addedProduct.prices,
      addedProduct.addSugar,
      addedProduct.stamp,
      addedProduct.details
    );
    this.shoppingCartService.productList.push(addedProductCopy);
    console.log(this.shoppingCartService.productList);
  }

  openProductInfo(product: Product) {
    console.log(product)
    this.openProductInfoEvent.emit(product)
  }
}
