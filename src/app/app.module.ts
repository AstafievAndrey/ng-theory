import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { FormsModule } from "@angular/forms";
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import {CarService} from "./services/car.service";
import {LogService} from "./services/log.service";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CarService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
