import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {OtpdataPage} from "../otpdata/otpdata";
import {PasswordPage} from "../password/password";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  usernameData = {inputData:''}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){

    console.log(this.usernameData.inputData);
    this.navCtrl.setRoot(PasswordPage,{username:this.usernameData.inputData});

  }

  signUp(){


    this.navCtrl.setRoot(SignupPage);

  }
}
