import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpsignupPage } from './otpsignup';
import {NgOtpInputModule} from "ng-otp-input";

@NgModule({
  declarations: [
    OtpsignupPage,

  ],
  imports: [
    IonicPageModule.forChild(OtpsignupPage),
    NgOtpInputModule,
  ],
})
export class OtpsignupPageModule {}
