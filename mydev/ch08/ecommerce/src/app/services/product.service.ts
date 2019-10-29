import { Injectable } from '@angular/core';
// Components will generally defer and ask a service for data or a section of the data.
// It is up to the service to decide how and where to fetch the data from. Later, if we
// want to change the source, we can do it in one place without touching any of the
// components, as long as our API signature remains the same.
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() { 
    this.products = [
      {
        id: 1,
        name: 'Amaze-o-Widget from Ronco',
        imagePath: '../../../assets/img/Nerd.jpg',
        price: 19.95,
        onSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name:'Snarled Masses of Cable!!',
        imagePath: '../../../assets/img/ethertangle.jpg',
        price: 16.99,
        onSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Random Keyclick Generator',
        imagePath: '../../../assets/img/questionbutton.jpg',
        price: 5.95,
        onSale: true,
        quantityInCart: 0
      }
    ];

  }

  getProducts() : Observable<Product[]> {
    return Observable.of(this.products);
  }

  createProduct(product:Product):Observable<any> {
    // see if product parameter's id already exists. If it doesn't, push
    // the new product onto the list
    let productClone = Object.assign({},product);;
    productClone.id = this.products.length + 1;
    productClone.quantityInCart = 0;
    this.products.push(productClone);
    return Observable.of(productClone);
  }

changeQuantity(id: number,changeInQuantity: number) : Observable<Product> {
    console.log("Change quantity from id "+id);
    const product = this.products.find(prod => prod.id === id);
    product.quantityInCart += changeInQuantity;
    return Observable.of(product);
  }

}
