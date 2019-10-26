import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Stock } from '../../model/stock';

//let counter = 1;

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
  }



createForm() {
  this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      // initialize notablePeople as a FormArray instance
      notablePeople: this.fb.array([])
  });
}

get notablePeople(): FormArray {
  // getter to make accessing the underlying FormArray easier
  // instead of this.stockForm.get('notablepeople')
  return this.stockForm.get('notablePeople') as FormArray;
}

addNotablePerson() {
  // add a new FormGroup to the FormArray
  this.notablePeople.push(this.fb.group({
    name: ['', Validators.required],
    title: ['', Validators.required]
  }))
}

removeNotablePerson(index: number) {
  // remove a FormGroup from the FormArray
  this.notablePeople.removeAt(index);
}

  resetForm() {
    this.stockForm.reset();
  }

  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Saving stock ', this.stock);
    }
}

