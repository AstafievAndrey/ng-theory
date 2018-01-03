import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "./car-page/car-page.component";
import {CarsRouterModule} from "./cars-router.module";
import {CarsService} from "../../shared/services/cars.service";
import {SharedDirectivesModule} from "../../shared/directives/shared-directives.module";

@NgModule({
    imports: [
      CommonModule,
      CarsRouterModule,
        SharedDirectivesModule
    ],
    declarations: [
      CarsPageComponent,
      CarPageComponent
    ],
    providers:[CarsService]
})
export class CarsModule { }
