import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailsPage } from './productdetails';
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    ProductdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductdetailsPage),
    Ionic2RatingModule,
  ],
})
export class ProductdetailsPageModule {}
