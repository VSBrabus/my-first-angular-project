import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Product } from "../product-page/product/product.model";

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<any>{

    constructor(private service: ProductsService){

    }

    resolve(): Observable<any> {
        return this.service.fetchProducts().pipe(
            catchError(error => {
                return of('No data')
            })
        )
    }
}