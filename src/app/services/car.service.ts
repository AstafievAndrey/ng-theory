import { Injectable } from '@angular/core';
import {Car} from "../components/objects/car";
import {LogService} from "./log.service";

@Injectable()
export class CarService {

    cars:Car[]= [
        {name:'Toyota',desc:'description Toyota',year:2015,isSold:true},
        {name:'Nissan',desc:'description Nissan',year:2005,isSold:false},
        {name:'KIA',desc:'description KIA',year:2018,isSold:true}
    ];

    addCar(car:Car){
        this.cars.push(car);
        this.logService.log(car);
    }

  constructor(private logService: LogService) { }

}
