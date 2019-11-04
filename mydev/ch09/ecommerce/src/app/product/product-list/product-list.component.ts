import { Component, OnInit } from '@angular/core';
import { Product } from '../../../app/model/product';
import { ProductQuantityChange } from '../../../app/model/product-quantity-change';
import { ProductService } from '../../services/product.service';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-product-list',
  template: `
  <div>
    <input type="text"
           placeholder="Search products"
           name="searchBox"
           [(ngModel)]="searchTerm"
           (keyup)="search()"/>
  </div>
  <app-product-item [product]="product"
                    (quantityChange)="onQuantityChange($event)"
                    *ngFor="let product of products$ | async"></app-product-item>
`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;
  public searchTerm: string='';

  private searchSubject: Subject<string> = new Subject();
  private reloadProductList : Subject<void> = new Subject();

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(500)
      .distinctUntilChanged()
      .merge(this.reloadProductList)
      .switchMap((query) => this.productService.getProducts(this.searchTerm))
    ;
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(
      change.product.id,
      change.changeInQuantity) 
        .subscribe((res) => this.reloadProductList.next())
        ;
  }

  onCreate() {
    this.reloadProductList.next();
  }

}
