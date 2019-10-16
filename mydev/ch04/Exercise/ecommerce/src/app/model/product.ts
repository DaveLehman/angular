export class Product {

    constructor(
        public id: number,
        public name: string,
        public imagePath: string,
        public price: number,
        public onSale: boolean,
        public quantityInCart: number
    ){}

}
