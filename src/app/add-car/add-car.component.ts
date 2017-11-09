import {Component, OnInit, Output, EventEmitter, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    @Output()
    car = new EventEmitter<{name:string, year:number}>();

    addCar(name:HTMLInputElement,year:HTMLInputElement){
        console.log(name.value,year.valueAsNumber);
        this.car.emit({
            name: name.value,
            year: year.valueAsNumber
        });
        name.value = null;
        year.valueAsNumber = 2017;
    }

  constructor() { }

  ngOnInit() {
  }

}
