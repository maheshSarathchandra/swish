import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompletedataPage} from "../completedata/completedata";
import {Dto, SignupPage} from "../signup/signup";



/**
 * Generated class for the OtpsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otpsignup',
  templateUrl: 'otpsignup.html',
})
export class OtpsignupPage {

  otp : string;

 signUpUserData : Dto;

  signupUser = {fist_name: '',last_name: '',email: '',phone:'',password: '',otp: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.signUpUserData = navParams.get("userData");

console.log(this.signUpUserData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpsignupPage');
  }

  onOtpChange(otpValue){

    this.otp = otpValue;

    console.log(this.otp);
  }



  users(){

    if(this.otp.length===4){

      this.signupUser.fist_name = this.signUpUserData.first_name;
      this.signupUser.last_name = this.signUpUserData.last_name;
      this.signupUser.email = this.signUpUserData.email;
      this.signupUser.password = this.signUpUserData.password;
      this.signupUser.phone = this.signUpUserData.phone;
      this.signupUser.otp = this.otp;

      this.signUpUserData.otp = this.otp;

      this.navCtrl.setRoot(CompletedataPage,{userData:this.signUpUserData});
    }else{


    }


  }
}
