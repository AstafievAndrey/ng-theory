import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {AppRouterModule} from "./app-router.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { ColorDirective } from './shared/directives/color.directive';
import {CarsModule} from "./components/cars-page/cars.module";
import {SharedDirectivesModule} from "./shared/directives/shared-directives.module";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CarsModule,
        SharedDirectivesModule,
        AppRouterModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
