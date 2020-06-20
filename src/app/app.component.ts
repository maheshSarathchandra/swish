import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';








import {AppearPage} from "../pages/appear/appear";


import {LocationPage} from "../pages/location/location";
import {LoginPage} from "../pages/login/login";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if(localStorage.getItem('wpIonicToken')){

      this.rootPage = AppearPage;
    }else{

      this.rootPage = LoginPage;
    }
  }



}

