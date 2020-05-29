import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpdataPage } from './otpdata';
import {NgOtpInputModule} from "ng-otp-input";

@NgModule({
  declarations: [
    OtpdataPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpdataPage),
    NgOtpInputModule,
  ],
})
export class OtpdataPageModule {}
