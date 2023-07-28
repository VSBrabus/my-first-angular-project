import { Component, OnInit } from '@angular/core';
import { Product } from './product/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  infoComponentVisible = false;

  constructor(private activatedRoute: ActivatedRoute) {}
  
  productList: Product[] = [];
  activeInfoProduct: Product;

  ngOnInit(): void {
    

    this.activatedRoute.data.subscribe((response: any) => {
      (<Product[]>response.products).forEach(element => {
        let newProduct=new Product(element.id,element.name,element.imgUrl,element.volume,element.prices,element.addSugar,element.stamp,element.details)
        this.productList.push(newProduct)
      });
    })
  }

  openProductInfo(product: Product) {
    this.activeInfoProduct=product
    this.infoComponentVisible=true
  }

  hideProductInfo() {
    this.infoComponentVisible = false
  }
  
}
