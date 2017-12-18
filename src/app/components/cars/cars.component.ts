import { Component, OnInit } from '@angular/core';
import {Car} from "../objects/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css'],
})
export class CarsComponent implements OnInit {

    cars: Car[];

    public getClass(isSolid:boolean){
        return {
            'list-group-item':true,
            'list-group-item-danger':!isSolid,
            'list-group-item-success':isSolid,
        }
    }

    constructor(private carService:CarService) { }

    ngOnInit() {
        this.cars = this.carService.cars;
    }

}
