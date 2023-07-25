import { IProduct } from "src/app/types/product.interface";
export class Product implements IProduct{
  constructor(
    public id: string,
    public name: string,
    public imgUrl: string,
    public volume: '250ml' | '500ml',
    public prices: {
      '250ml': number;
      '500ml': number;
    },
    public addSugar: boolean,
    public stamp: boolean,
    public details: {
      calories: number;
      totalFat: number;
      cholesterol: number;
      sodium: number;
      totalCarbohydrate: number;
      protein: number;
      vitaminD: number;
      calcium: number;
    }
  ) {}
  getPrice(): number {
    if (this.volume === '250ml') {
      return this.prices['250ml'];
    }
    return this.prices['500ml'];
  }
}
