import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

let counter = 4;

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})



export class CreateProductComponent {

  @Output() private productCreated: EventEmitter<void> = new EventEmitter();

  public message='';

  constructor(private productService : ProductService) {
   } 

createProduct(productForm) {
  if(productForm.invalid) {
    this.message = 'Please correct all errors and resubmit the form';
  } else {
    const product: Product = productForm.value.product;
    this.productService.createProduct(product).subscribe((res) => {
      this.message = 'Product successfully created';
      console.log('Triggered event emitter');
      this.productCreated.next();
      }, (err) => {
        this.message = 'Unable to create product, please try again';
      });
    }
  }


}
