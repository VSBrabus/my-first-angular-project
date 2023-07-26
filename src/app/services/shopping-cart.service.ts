import { Product } from "../product-page/product/product.model"

export class ShoppingCartService{
    productList: Product[] = []

    calculateCartPrice():number{
        let totalPrice=0
        this.productList.forEach((product)=>{
            totalPrice = totalPrice + product.getPrice()
        })
        return totalPrice + 15
    }
}