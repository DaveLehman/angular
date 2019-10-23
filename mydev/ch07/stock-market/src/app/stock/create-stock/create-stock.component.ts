import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public nameControl = new FormControl();

  constructor() { }

onSubmit() {
  console.log('Name Control value', this.nameControl.value);
  }


}
