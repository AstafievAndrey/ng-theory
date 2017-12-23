import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class CarsService{

    constructor(private http:Http){}

    getCars(){
        return this.http.get('http://localhost:3000/cars')
            .map((response:Response)=>{
                return response.json();
            });
    }

    deleteCar(car:any){
        return this.http.delete(`http://localhost:3000/cars/${car.id}`).map((response:Response)=>response.json());
    }

    changeColor(car:any){
        return this.http.put(`http://localhost:3000/cars/${car.id}`,car)
            .map((response:Response)=>response.json());
    }

    addCar(name:string){
        let data = {
            name: name,
            color:'blue'
        }
        return this.http.post('http://localhost:3000/cars',data)
            .map((response:Response)=>{
                return response.json();
            });
    }
}