export class Product {
    quantityInCart: number = 0;

    constructor(
        public name: string,
        public price: number,
        public imagePath: string,
        public onSale: boolean,
    ){}

  notInCart(): boolean {
    return this.quantityInCart <= 0;
  }

  incrementCart(event) {
    this.quantityInCart++;
  }

  decrementCart(event) {
    this.quantityInCart--;
  }
}
