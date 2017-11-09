import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    @Input()
    car:{name:string,year:number};

    constructor() { }

    ngOnInit() {
    }

}