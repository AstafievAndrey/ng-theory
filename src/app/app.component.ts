import {Component, ViewChild, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    defaultCountry = 'ru';
    form:FormGroup;
    charCount:number = 5;

    ngOnInit(){
        this.form = new FormGroup({
            user: new FormGroup({
                email:  new FormControl('',[Validators.required,Validators.email], this.checkForEmail), //3-ий парам для асинхронного валидатора
                // pass: new FormControl('', [Validators.required,this.checkForLength]),
                pass: new FormControl('', [Validators.required,this.checkForLength.bind(this)]),
            }),
            country: new FormControl('ru')
        });
    }

    checkForEmail(control:FormControl):Promise<any>{
        return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    if(control.value === 'test@mail.ru'){
                        resolve({
                            'emailIsUsed':true
                        });
                    } else {
                        resolve(null);
                    }
                },3000);
            }
        );
    }

    //
    checkForLength(control:FormControl){
        //this.checkForLength.bind(this) this передаем чтобы иметь доступ к этому контексту
         if(control.value.length <= this.charCount){
             return {
                 'lengthError':true
             }
         }
         return null;
    }

    public submitForm(){
        console.log(this.form);
    }

    public addRandomEmail(){
    }
}
