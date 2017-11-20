import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name:'appPow'
})
export class PowPipe implements PipeTransform{

    transform(value: number, pow: number = 1, str:string = ''): number {
        console.log();
        return Math.pow(value,pow);
    }
}
