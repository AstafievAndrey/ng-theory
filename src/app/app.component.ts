import {Component, OnInit} from '@angular/core';
import {CarsService} from "./shared/services/cars.service";

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

    ngOnInit(){
    }

}
