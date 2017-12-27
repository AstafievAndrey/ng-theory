import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CarsService{

    constructor(private http:Http){}

    getTitle(){
        return this.http.get('http://localhost:3000/title')
            .map((response:Response)=>{
                return response.json();
            }).map((data)=>data.value).delay(2000)
            .catch((error:Response)=>{
                return Observable.throw('Сервер недоступен');
            });
    }

    getCar(id:number){
        return this.http.get(`http://localhost:3000/cars/${id}`)
            .map((response:Response)=>response.json());
    }

    getCars(){
        const header = new Headers({
            'Content-Type':'application/json; charset=utf-8'
        });
        return this.http.get('http://localhost:3000/cars',{headers:header})
            .map((response:Response)=>{
                return response.json();
            }).catch((error:Response)=>{
                // console.log(error);
                return Observable.throw('Сервер недоступен');
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
        const header = new Headers({
            'Content-Type':'application/json; charset=utf-8'
        });
        let data = {
            name: name,
            color:'blue'
        }
        return this.http.post('http://localhost:3000/cars',data,{headers:header})
            .map((response:Response)=>{
                return response.json();
            });
    }
}
