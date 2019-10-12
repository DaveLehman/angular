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

  addToCart(event) {
    this.quantityInCart++;
  }

  subtractFromCart(event) {
    this.quantityInCart--;
  }
}
