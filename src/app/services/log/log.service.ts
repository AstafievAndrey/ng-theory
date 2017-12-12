import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    log(message:any){
        console.log(message);
    }

    constructor() { }

}
