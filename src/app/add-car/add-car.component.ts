import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carYear:number = 2017;
    @Output()
    onAddCar = new EventEmitter<{name:string,year:number}>();
    @ViewChild('carYearInput') carYearInput:ElementRef;

    addCar(carNameEl:HTMLInputElement){
        console.log(carNameEl.value,this.carYearInput);
        this.onAddCar.emit({
            name:carNameEl.value,
            year: +this.carYearInput.nativeElement.value// + конвертнет в число
        });
        carNameEl.value = '';
        this.carYearInput.nativeElement.value = 2017;
        //this.carYear = 2017;
    }

    constructor() { }

    ngOnInit() {
    }

}
