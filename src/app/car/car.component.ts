import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-car',
    //selector: '[app-car]',
    //selector: '.app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    carName:string = " Vfibyf";
    carYear:number = 2015;

    @Input('carItem')
    car:{name:string,year:number};

    getName(){
        return this.carName;
    }

    constructor() { }

    ngOnInit() {
    }

}
