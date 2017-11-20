import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    searchCar:string = '';
    cars = [
        {name:'Ford',description:'test1'},
        {name:'Mystang',description:'test2'},
        {name:'Mersedez',description:'test3'},
        {name:'Bmv',description:'test4'},
    ];
}
