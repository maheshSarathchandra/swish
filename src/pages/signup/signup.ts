import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OtpsignupPage} from "../otpsignup/otpsignup";
import {CompletedataPage} from "../completedata/completedata";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

   userData = {firstname:'',lastname:'', phoneNumber:'',email:'',password:'',confirmpassword:''};

  signupUser = {username: '',fist_name: '',last_name: '',email: '',password: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){

    if(this.userData.password==this.userData.confirmpassword){

      this.signupUser.username = this.userData.phoneNumber;
      this.signupUser.fist_name = this.userData.firstname;
      this.signupUser.last_name = this.userData.lastname;
      this.signupUser.email = this.userData.email;
      this.signupUser.password = this.userData.confirmpassword;

      console.log("created");

      this.navCtrl.setRoot(CompletedataPage,{userData:this.signupUser});
    }else{
      console.log("data not valid");
    }

    console.log(this.userData);

  }

}
