import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { AuthService } from '../../services/auth.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService, private authService: AuthService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

  fetchStocks() {
    this.stocks$ = this.stockService.getStocks();
  }

  setAuthToken() {
    console.log('setting token to TESTING');
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    console.log('setting token to null');
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe(
      (res) => console.log('Successfully made failing call',res),
      (err) => console.log('Error making failing call', err));
  }


}