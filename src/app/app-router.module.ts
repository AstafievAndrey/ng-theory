import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsPageComponent} from "./components/cars-page/cars-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {CarPageComponent} from "./components/car-page/car-page.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {NewPageComponent} from "./component/new-page/new-page.component";

const appRoutes:Routes = [
    {
        path:'cars',
        canActivate:[AuthGuardService],
        component: CarsPageComponent,
        children:[
            {path:':id', component: CarPageComponent}
        ]
    },
    // {path:'cars/:id', component: CarPageComponent},
    {path:'', component: HomePageComponent},
    {path:'new',component:NewPageComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:'/not-found'},
    // {path:'**',component:NotFoundComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouterModule{}
