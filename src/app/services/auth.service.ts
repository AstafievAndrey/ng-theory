import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isLoggedIn = false;

    constructor() { }

    isAuth(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('isAuth');
                resolve(this.isLoggedIn);
            },1000);
        });
    }

    logIn(){
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }

}
