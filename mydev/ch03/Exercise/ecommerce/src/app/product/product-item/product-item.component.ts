import { Component, OnInit } from '@angular/core';

import { Stock, Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }


  ngOnInit() {

      this.product = new Product('Amaze-o-Widget from Ronco',19.85,'../../../assets/img/Nerd.jpg',true);
  }

  notInCart(): boolean {
    return this.product.quantityInCart <= 0;
  }

  addToCart(event) {
    this.product.quantityInCart++;
  }

  subtractFromCart(event) {
    this.product.quantityInCart--;
  }

}
