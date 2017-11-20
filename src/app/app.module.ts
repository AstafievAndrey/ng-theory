import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarFilterPipe } from './car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe
  ],
  imports: [
        BrowserModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
