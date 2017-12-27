import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {CarsService} from "./services/cars.service";
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import {AppRouterModule} from "./app-router.module";
import { CarPageComponent } from './components/car-page/car-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NewPageComponent } from './component/new-page/new-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    CarPageComponent,
    NotFoundComponent,
    NewPageComponent,
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule
  ],
  providers: [CarsService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
