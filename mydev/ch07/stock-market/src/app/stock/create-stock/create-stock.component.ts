import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Stock } from '../../model/stock';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})


export class CreateStockComponent {

  private stock: Stock;
  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
    this.stock = new Stock('Test ' + counter, 'TST' + counter++, 20, 10 );
  }

onSubmit() {
  this.stock = Object.assign({}, this.stockForm.value);
  console.log('Saving stock ', this.stock);
  }

createForm() {
  this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
  });
}

  loadStockFromServer() {
    this.stock = new Stock('Test ' + counter, 'TST' + counter++, 20, 10 );
    let stockFormModel = Object.assign({}, this.stock);
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    this.stockForm.setValue(stockFormModel);
  }

  patchStockForm() {
    this.stock = new Stock('Test ${counter++}','TSTp', 20, 10 );
    this.stockForm.patchValue(this.stock);
  }

  resetForm() {
    this.stockForm.reset();
  }


}

