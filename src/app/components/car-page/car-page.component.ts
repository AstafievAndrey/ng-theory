import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

    car:any;
    id:number;
    year:number;
    hash:string;

  constructor(private route:ActivatedRoute,private router:Router, private carsService:CarsService) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.year = this.route.snapshot.queryParams['year'];
      this.hash = this.route.snapshot.fragment;
      //подписываемся на изменения для динам. обновления
      this.route.params.subscribe((params:Params)=>{
          // console.log(params);
          this.id = +params['id'];
          this.getCar();
      });
      this.route.queryParams.subscribe((params:Params)=>{
          this.year = params['year'];
      });
      this.route.fragment.subscribe((params)=>{
          this.hash =  params;
      });
  }

  openPage(){
      this.router.navigate(['/cars',8,'Mazda'],{
          queryParams:{
              test:'sfsf',year:2000
          }
      });
  }

  getCar(){
      this.carsService.getCar(this.id).subscribe(
          (data)=> {
              this.car = data;
              console.log(data);
          }
      );
  }

}
