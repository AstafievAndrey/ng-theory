import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    defaultCountry = 'ru';
    formData = {};
    isSubmited = false;

    @ViewChild('form') form:NgForm;

    public submitForm(){
        this.isSubmited = true;
        this.formData = this.form.value;
        console.log(this.form);
        this.form.reset();
    }

    public addRandomEmail(){
        const randEmail = 'wfm@gmail.com';
        // this.form.setValue({
        //     user:{
        //         email:randEmail,
        //         pass:''
        //     },
        //     country:'kz'
        // });
        this.form.form.patchValue({
            user:{email:randEmail}
        });
    }
}
