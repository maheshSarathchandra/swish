import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenderPage } from './vender';
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    VenderPage,
  ],
  imports: [
    IonicPageModule.forChild(VenderPage),
    Ionic2RatingModule,
  ],
})
export class VenderPageModule {}
