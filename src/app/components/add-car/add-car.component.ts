import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Car} from "../objects/car";
import {LogService} from "../../services/log.service";
import {CarService} from "../../services/car.service";

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],
    // providers:[LogService]
})
export class AddCarComponent implements OnInit {

    // @Output()
    // car = new EventEmitter<Car>();

    public addCar(elem:Car){
        this.carService.addCar(elem);
        // this.car.emit(elem);
        // this.logService.log(elem);
    }

    constructor(private logService:LogService, private carService:CarService) { }

    ngOnInit() {
    }

}
