import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CompletedataPage} from "../completedata/completedata";
import {Dto} from "../signup/signup";



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

  timerOn = true;

  signupUser = {fist_name: '',last_name: '',email: '',phone:'',password: '',otp: ''};

  lenth = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastController : ToastController) {

   this.signUpUserData = navParams.get("userDataItems");

console.log(this.signUpUserData);

  }

  ionViewDidLoad() {


  }

  ionViewDidEnter() {

    this.timer(120);

  }


  onOtpChange(otpValue){

    this.otp = otpValue;

    console.log(this.otp);
  }



  users(){



    if(this.otp == null){

      this.presentToast();

    }else {

      this.timerOn = false;

      if (this.otp.length === 4) {

        this.signupUser.fist_name = this.signUpUserData.first_name;
        this.signupUser.last_name = this.signUpUserData.last_name;
        this.signupUser.email = this.signUpUserData.email;
        this.signupUser.password = this.signUpUserData.password;
        this.signupUser.phone = this.signUpUserData.phone;
        this.signupUser.otp = this.otp;

        this.signUpUserData.otp = this.otp;

        this.navCtrl.setRoot(CompletedataPage, {userData: this.signUpUserData});
      } else {

 this.presentToast();
      }
    }

  }

  timer(remaining){


    let m = Math.floor(remaining/60);

    let s = remaining%60;

    let b = m <10? '0'+ String(m) :String(m);

    let a = s <10 ? '0' + String(s):String(s);


    remaining -= 1;

    if(remaining >=0 && this.timerOn) {

      document.getElementById('timer').innerHTML = b +':'+ a ;

      setTimeout(()=>{
          this.timer(remaining);
        },
        1000
      );

      return;
    }


    if(!this.timerOn){


  return ;
    }





  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'check OTP again',
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

}
