import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

    cars:any;

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars(){
      this.carService.getCars().subscribe((data) => {
          this.cars = data;
      });
  }

}
