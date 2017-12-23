import {Component, OnInit} from '@angular/core';
import {CarsService} from "./services/cars.service";

interface Cars{
    name:string;
    color:string;
    id:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    cars:Cars[] = [];
    carName:string;
    colors = ['red','blue','white','yellow','green','orange'];

    constructor(private carService:CarsService){}

    ngOnInit(){
        // this.loadCars();
    }

    addCar(){
        this.carService.addCar(this.carName)
            .subscribe((car:Cars)=>{
                console.log(car);
                this.cars.push(car);
            });
        this.carName = '';
    }

    deleteCar(car:Cars){
        this.carService.deleteCar(car)
            .subscribe((data)=>{
                this.cars = this.cars.filter(item => item.id !== car.id);
            });
    }

    setNewColor(car:Cars){
        car.color = this.getRandColor();
        this.carService.changeColor(car).subscribe(
            (car:Cars)=>console.log(car)
        );
    }

    getRandColor():string{
        let num = Math.round(Math.random()*(this.colors.length -1));
        console.log(this.colors[num]);
        return this.colors[num];
    }

    loadCars(){
        this.carService.getCars()
            .subscribe((cars: Cars[])=>{
                console.log(cars);
                this.cars = cars;
            });
    }

}
