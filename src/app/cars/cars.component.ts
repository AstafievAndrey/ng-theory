import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    cars:[{name:string, year:number}] = [
        {name:'Lada',year:2017},
        {name:'Audi',year:2013},
        {name:'Mercedez',year:2017},
    ];

    constructor() { }

    ngOnInit() {
    }

}
