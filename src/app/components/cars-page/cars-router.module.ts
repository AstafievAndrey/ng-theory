import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "./car-page/car-page.component";

const carsRoutes:Routes = [
    {
        path:'',
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
