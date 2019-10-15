import { Component, OnInit } from '@angular/core';

import {  Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public products: Array<Product>;
  private quantities: Array<number>;

  constructor() { }


  ngOnInit() {

      this.products = [
        new Product('Amaze-o-Widget from Ronco',19.85,
          '../../../assets/img/Nerd.jpg',true),
        new Product('Snarled Masses of Cable!!',16.99,
          '../../../assets/img/ethertangle.jpg',false),
        new Product('Random Keyclick Generator',5.95,
        '../../../assets/img/questionbutton.jpg',true)
      ];  
      this.quantities = [];
      for (let i = 1; i <= 20; i++) {
        this.quantities.push(i);
      }
  }


}
