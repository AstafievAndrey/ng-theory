import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'carFilter',
    pure: false, //чтобы pipe постоянно отрабатывался для динамично меняюшего объекта использовать аккуратно влияет на быстродействие по умолчанию true
})
export class CarFilterPipe implements PipeTransform {

  transform(value: any, str: string, field:string): any {
      if(value.length === 0 || str === ''){
          return value;
      }
      return value.filter(car => car[field].toLowerCase().indexOf(str) !== -1 );
  }

}
