import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public name: string;
  public price: number;
  public imagePath: string;
  public onSale: boolean;
  public quantityInCart: number;
  

  constructor() { }

  notInCart(): boolean {
    return this.quantityInCart <= 0;
  }

  ngOnInit() {
      this.name = 'Amaze-o-Widget from Ronco';
      this.imagePath = '../../../assets/img/Nerd.jpg'
      this.price = 19.85;
      this.onSale = true;
      this.quantityInCart = 4;
  }

  addToCart(event) {
    this.quantityInCart++;
  }

  subtractFromCart(event) {
    this.quantityInCart--;
  }

}
