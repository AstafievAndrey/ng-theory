import { Component, OnInit } from '@angular/core';
import {Car} from "../objects/car";

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css']
})
export class CarsComponent implements OnInit {

    cars:Car[]= [
        {name:'Toyota',desc:'description Toyota',year:2015,isSold:true},
        {name:'Nissan',desc:'description Nissan',year:2005,isSold:false},
        {name:'KIA',desc:'description KIA',year:2018,isSold:true}
    ];

    addCar(car:Car){
        this.cars.push(car);
    }

    public getClass(isSolid:boolean){
        return {
            'list-group-item':true,
            'list-group-item-danger':!isSolid,
            'list-group-item-success':isSolid,
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
