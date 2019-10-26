import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
    ];
   }

   getStocks() : Stock[] {
     return this.stocks;
   }

   createStock(stock : Stock) {
      // if we're passed a stock that exists, refuse
      let foundStock = this.stocks.find(each => each.code === stock.code);
      if (foundStock) {
        return false;
      }
      // otherwise, add to stocks array
      this.stocks.push(stock);
      return true;
   }

   toggleFavorite(stock: Stock) {
     let foundStock = this.stocks.find( each => each.code === stock.code);
     foundStock.favorite = !foundStock.favorite;
   }
}
