import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickCountService } from 'src/app/click-count.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})

export class ProductComponent{
 
  constructor(private clickCountService: ClickCountService){
    
  }

  @Input() product:Product

  onSubmit() {
    console.log('Product Name:', this.product.name);
    console.log('Product Price:', this.product.price);
    console.log('Selected Size:', this.product.size);
    console.log('Add Sugar:', this.product.addSugar);
  }
  
  updateAddToCart() {
    
    this.clickCountService.increaseClickCount()
  }

}
