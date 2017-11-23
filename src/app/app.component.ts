import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    public searchCar:string = '';
    public carList: [{name:string,descr:string}] = [
        {name:'Ford', descr:'description 1'},
        {name:'BMW', descr:'description 2'},
        {name:'Lada', descr:'description 3'},
        {name:'Nissan', descr:'description 4'},
        {name:'Reno', descr:'description 5'},
        {name:'Mercedez', descr:'description 6'},
        {name:'Kia', descr:'description 7'},
    ];

    public addCar = function () {
        this.carList.push({name: 'new car '+(this.carList.length+1),descr:'description '+(this.carList.length+1)});
    }
}
