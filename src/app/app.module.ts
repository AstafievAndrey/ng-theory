import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BackgroundDirective} from "./directives/background.directive";
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
    declarations: [
        AppComponent,
        BackgroundDirective,
        MyDirectiveDirective
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
