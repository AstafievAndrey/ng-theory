import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name:string = 'GeoPortalIndicatorDev';
    pi:number = Math.PI;
    date = new Date();
    money:number = 350;
    amount:number = 0.45;
    object:any = {
        foo:'bar',
        baz:'qux',
        nested:{
            xyz:3,
            numbers:[1,2,3]
        }
    };
}
