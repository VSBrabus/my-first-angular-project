export class Product{
    constructor(
        public name: string,
        public price: number,
        public image: string,
        public size: string,
        public addSugar: boolean,
        public hasSpinner: boolean
    ){}
}