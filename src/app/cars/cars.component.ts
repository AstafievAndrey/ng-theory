import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    canAddCar:boolean = false;
    carStatusText = '';
    inputText = '';
    carName:string = '';
    carYear:number = 2017;

    carsArray:[{name:string,year:number}]=[
        {name:"Toyota",year:2010},
        {name:"Lada",year:2017},
        {name:"Bmv",year:2013},
    ];

    dates = [
        new Date(2015,2,1),
        new Date(2013,2,1),
        new Date(2013,2,3),
        new Date(2014,4,2),
        new Date(2009,3,1),
    ];


    constructor() {
        setTimeout(()=>{this.canAddCar=true;},1000);
    }

    ngOnInit() {
    }

    updateCarList(car:{name:string, year:number}){
        //console.log(car);
        this.carsArray.push(car);
    }

    addCarArr(){
        this.carsArray.push({name:this.carName,year:this.carYear});
        this.carName = '';
        this.carYear = 2017;
    }


    userObservable = new Subject<{first: string, last: string}>();
    first = ['John', 'Mike', 'Mary', 'Bob'];
    firstIndex = 0;
    last = ['Smith', 'Novotny', 'Angular'];
    lastIndex = 0;

    setBigCarText(car:string){
        console.log(car);
        return true;
    }

    nextUser() {
        let first = this.first[this.firstIndex++];
        if (this.firstIndex >= this.first.length) this.firstIndex = 0;
        let last = this.last[this.lastIndex++];
        if (this.lastIndex >= this.last.length) this.lastIndex = 0;
        this.userObservable.next({first, last});
    }

    onKeyUp(event:Event){
        this.inputText = (<HTMLInputElement>event.target).value;
    }

    onKeyUpOne(value){
        this.inputText = value;
    }

    onKeyUpEnter(event){
        if(event.code==='Enter')
            this.inputText = event.target.value;
    }

    onKeyUpEnterOne(event){
        this.inputText = event.target.value;
    }

}
