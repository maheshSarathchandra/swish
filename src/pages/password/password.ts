import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {UserPage} from "../user/user";

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  passwordData = {password:'',username : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider) {

    this.passwordData.username = navParams.get('username');

    console.log(this.passwordData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');


  }

  loginUser(){

console.log(this.passwordData);

this.loginservice.userLogin(this.passwordData).subscribe(
  data=>{
    console.log(data);

    localStorage.setItem('wpIonicToken',JSON.stringify(data));
  }
);
    if(localStorage.getItem('wpIonicToken')){

      this.navCtrl.setRoot(UserPage);
    }
  }

}
