import {Component, OnInit, Input, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    @Input()
    car:{name:string,year:number};
    @ContentChild('carName')
    carName:ElementRef;

    ngAfterViewInit(){
        console.log(this.carName);
    }

    constructor() { }

    ngOnInit() {
    }

}
