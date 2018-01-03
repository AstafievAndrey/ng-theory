import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuardService} from "../../shared/services/auth-guard.service";
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "./car-page/car-page.component";

const carsRoutes:Routes = [
    {
        path:'cars',
        canActivate:[AuthGuardService],
        component: CarsPageComponent,
        children:[
            {path:':id', component: CarPageComponent}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(carsRoutes)],
    exports:[RouterModule]
})
export class CarsRouterModule {}
