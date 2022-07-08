import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import {NgTinyUrlModule} from 'ng-tiny-url';

@NgModule({

  declarations: [
    AppComponent,
    UrlShortenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
