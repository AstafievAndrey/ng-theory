import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const appRoutes:Routes = [
    // {path:'cars/:id', component: CarPageComponent},
    {path:'', component: HomePageComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:'/not-found'},
    // {path:'**',component:NotFoundComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouterModule{}
