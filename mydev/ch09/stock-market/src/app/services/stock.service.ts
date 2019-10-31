import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { of as ObservableOf } from 'rxjs/Observable/of';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { Stock } from '../model/stock';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

   getStocks() : Observable<Stock[]> {
     return this.http.get<Stock[]>('api/stock');
   }

   createStock(stock : Stock) : Observable<any> {
      return this.http.post('/api/stock', stock);
   }

   toggleFavorite(stock: Stock) : Observable<Stock> {
     return this.http.patch<Stock>('/api/stock' + stock.code, 
     {
       favorite: !stock.favorite
     });
   }
}
