import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
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

  usernameData = {inputData:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCrtl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){

    if(this.usernameData.inputData === ''){


    }else {


      let userPhoneNumber = /^\d+$/.test(this.usernameData.inputData);

      if (userPhoneNumber) {

        let p = this.usernameData.inputData.charAt(0);

        let phoneNumberData;

        if (p === "0") {
          phoneNumberData = this.usernameData.inputData.substr(1);
        } else {

        }

        let countryCode = "+94";
        phoneNumberData = countryCode.concat(phoneNumberData);

        console.log(this.usernameData.inputData);
        this.navCtrl.setRoot(PasswordPage, {username: phoneNumberData});

      } else {

        console.log(this.usernameData.inputData);
        this.navCtrl.setRoot(PasswordPage, {username: this.usernameData.inputData});
      }

    }

  }

  signUp(){


    this.navCtrl.setRoot(SignupPage);

  }




}
