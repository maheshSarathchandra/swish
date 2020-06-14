import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {PasswordPage} from "../password/password";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";


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

  consumer_key: string;

  consumer_secret:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCrtl: ToastController,
              public loginservice: LoginserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');

    this.consumer_key = localStorage.getItem("woocommerce_consumer_key");
    this.consumer_secret = localStorage.getItem("woocommerce_consumer_secret");



    console.log(this.consumer_key);
    console.log(this.consumer_secret);
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

ionViewWillEnter(){


  this.loginservice.appInfo().subscribe(data=>{

  console.log(data);

  });



}


}
