import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { debounceTime, switchMap, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.stockService.getStocks(query)),
      share()
    );
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

}