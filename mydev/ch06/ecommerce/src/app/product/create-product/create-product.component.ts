import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

public message = '';

  constructor() { }

 createProduct(productForm){
   if(productForm.valid) {
     const product = productForm.value.product;
   } else {
     this.message = 'Please correct all errors and resubmit the form';
   }
 }

}
