import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public productFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   } 

   createForm() {
     this.productFormGroup = this.fb.group({
      name: ['My New Product', Validators.required],
      id: [4, [Validators.required, Validators.min(0)]],
      imagePath: ['../../../assets/img/Nerd.jpg', Validators.required],
      price: [20, [Validators.required, Validators.min(1)]],
      onSale: [false],
      quantityInCart: [0,[Validators.required, Validators.min(0)]],
     });
   }

   // getters allow better-looking html
   get name() { return this.productFormGroup.get('name'); }
   get id() { return this.productFormGroup.get('id'); }
   get imagePath() { return this.productFormGroup.get('imagePath'); }
   get price() { return this.productFormGroup.get('price'); }
   get onSale() { return this.productFormGroup.get('onSale'); }
   get quantityInCart() { return this.productFormGroup.get('quantityInCart'); }

  onSubmit() {
    console.log('productFormGroup Value ', this.productFormGroup.value);
  }

}
