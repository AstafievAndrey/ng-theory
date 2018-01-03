import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    openCarsPage(){
        // this.router.navigate(['/cars']);
        console.log(this.route);
        //относительный путь
        this.router.navigate(['/cars'],{relativeTo:this.route});
    }

  constructor(private router:Router, private route:ActivatedRoute, private authService:AuthService) { }

  ngOnInit() {
  }

    changeAuthStatus(status:boolean){
        if(status){
            this.authService.logIn();
        }else{
            this.authService.logOut();
        }
    }

}
