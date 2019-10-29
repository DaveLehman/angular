import { Component, OnInit } from '@angular/core';
import { Product } from '../../../app/model/product';
import { ProductQuantityChange } from '../../../app/model/product-quantity-change';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
      this.productService.getProducts()
      .subscribe(products => {
        this.products$ = this.productService.getProducts();
      });
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.product.quantityInCart);

  }

}
