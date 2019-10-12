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
  

  constructor() { }

  ngOnInit() {
      this.name = 'Amaze-o-Widget from Ronco';
      this.imagePath = '../../../assets/img/Nerd.jpg'
      this.price = 19.85;
      this.onSale = false;
  }

}
