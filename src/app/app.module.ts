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
import {VenderPage} from "../pages/vender/vender";
import {ProductdetailsPage} from "../pages/productdetails/productdetails";
import {CartPage} from "../pages/cart/cart";
import {PaymentsPage} from "../pages/payments/payments";
import {AccountPage} from "../pages/account/account";
import {BillingPage} from "../pages/billing/billing";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {ChangedataPage} from "../pages/changedata/changedata";
import { CreatedataProvider } from '../providers/createdata/createdata';
import {HTTP} from "@ionic-native/http";
import {IonicStorageModule} from "@ionic/storage";



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
    ProductPage,
    VenderPage,
    ProductdetailsPage,
    CartPage,
    PaymentsPage,
    AccountPage,
    BillingPage,
    ChangedataPage
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

    }),
    IonicStorageModule.forRoot()
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
    ProductPage,
    VenderPage,
    ProductdetailsPage,
    CartPage,
    PaymentsPage,
    AccountPage,
    BillingPage,
    ChangedataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginserviceProvider,
    CreatedataProvider
  ]
})
export class AppModule {}
