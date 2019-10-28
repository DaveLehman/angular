import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';


import { Stock } from '../model/stock';

@Injectable(//{
  //providedIn: 'root'
//})
)
export class StockService {

  private stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
    ];
   }

   getStocks() : Observable<Stock[]> {
     return ObservableOf(this.stocks);
   }

   createStock(stock : Stock) : Observable<any> {
      // if we're passed a stock that exists, refuse
      let foundStock = this.stocks.find(each => each.code === stock.code);
      if (foundStock) {
        return ObservableThrow({msg: 'Stock with code ' + stock.code + ' already exists'});
      }
      // otherwise, add to stocks array
      this.stocks.push(stock);
      return ObservableOf({msg: 'Stock with code ' + stock.code + ' successfully created'});
   }

   toggleFavorite(stock: Stock) {
     let foundStock = this.stocks.find( each => each.code === stock.code);
     foundStock.favorite = !foundStock.favorite;
   }
}
