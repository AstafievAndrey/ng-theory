import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    searchStr = '';
    cars = [
        {name:'Audi',desc:'description Audi'},
        {name:'Bmv',desc:'description Bmv'},
        {name:'Tesla',desc:'description Tesla'},
        {name:'Toyota',desc:'description Toyota'},
        {name:'Hyndai',desc:'description Hyndai'},
        {name:'Honda',desc:'description Honda'},
        {name:'Porche',desc:'description Porche'},
    ];
    second:number = 3000;

    asyncTitle = Observable.of('Async title '+this.second+' second').delay(this.second);
}
