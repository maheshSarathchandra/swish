import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {WelcomePage} from "../pages/welcome/welcome";
import {AppearPage} from "../pages/appear/appear";
import {SignupPage} from "../pages/signup/signup";
import {OtpdataPage} from "../pages/otpdata/otpdata";
import {NgOtpInputModule} from "ng-otp-input";
import {OtpsignupPage} from "../pages/otpsignup/otpsignup";
import {PasswordPage} from "../pages/password/password";
import {CompletedataPage} from "../pages/completedata/completedata";
import { LoginserviceProvider } from '../providers/loginservice/loginservice';
import {UserPage} from "../pages/user/user";
import {HttpClientModule} from "@angular/common/http";
import {Geolocation} from "@ionic-native/geolocation";
import {LocationPage} from "../pages/location/location";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {ProfilePage} from "../pages/profile/profile";
import {SelectPage} from "../pages/select/select";
import {SearchPage} from "../pages/search/search";
import {FavoritePage} from "../pages/favorite/favorite";
import {ProductPage} from "../pages/product/product";
import {Ionic2RatingModule} from "ionic2-rating";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    WelcomePage,
    AppearPage,
    SignupPage,
    OtpdataPage,
    OtpsignupPage,
    PasswordPage,
    CompletedataPage,
    UserPage,
    LocationPage,
    DashboardPage,
    ProfilePage,
    SearchPage,
    SelectPage,
    FavoritePage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    NgOtpInputModule,
    HttpClientModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp,{
      platforms:{
        ios:{
          backButtonText:'',
          backButtonIcon: 'ios-arrow-round-back-outline'
        }
      }

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    WelcomePage,
    AppearPage,
    SignupPage,
    OtpdataPage,
    OtpsignupPage,
    PasswordPage,
    CompletedataPage,
    UserPage,
    LocationPage,
    DashboardPage,
    ProfilePage,
    SearchPage,
    SelectPage,
    FavoritePage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginserviceProvider
  ]
})
export class AppModule {}
