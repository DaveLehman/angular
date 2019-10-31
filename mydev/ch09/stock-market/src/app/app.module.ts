import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../app/services/auth.service';
import { StockAppInterceptor } from '../app/services/stock-app.interceptor';

import { AppComponent } from './app.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from '../app/services/stock.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    StockItemComponent,
    StockListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    StockService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StockAppInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
