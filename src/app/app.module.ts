import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {CarsService} from "./services/cars.service";
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
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
