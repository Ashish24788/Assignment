import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarcoPoloComponent } from './marco-polo/marco-polo.component';

// services
import { BaseService } from './base.service';
import { AsciiChartComponent } from './ascii-chart/ascii-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcoPoloComponent,
    AsciiChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
