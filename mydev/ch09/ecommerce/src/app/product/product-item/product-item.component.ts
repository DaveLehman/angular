import { Component, OnInit, Input, Output, EventEmitter,  ChangeDetectionStrategy } from '@angular/core';

import {  Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ProductQuantityChange } from '../../model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {

  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  constructor() { }
  
  incrementInCart() {
    console.log("ProductItemComponent-level increment");
    //this.quantityChange.emit({product: this.product, changeInQuantity: 1});
    this.quantityChange.emit({product: this.product, changeInQuantity: 1})
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      console.log("ProductItemComponent-level deccrement");
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
    }
  }
}
