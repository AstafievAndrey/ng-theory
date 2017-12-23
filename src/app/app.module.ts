import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {CarsService} from "./services/cars.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
