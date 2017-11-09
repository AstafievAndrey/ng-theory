import {
    Component, OnInit, Input, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy{

    @Input() car:{name:string,year:number};
    @Input() name:string;
    @ContentChild('carName')
    carName:ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes:SimpleChanges){
        //может принимать в себя аргументы
        console.log('ngOnChanges',changes);
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentCheked');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(){
        // console.log(this.carName);
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }
}
