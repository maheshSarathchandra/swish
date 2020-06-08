import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PasswordPage} from "../password/password";

/**
 * Generated class for the OtpdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-otpdata',
  templateUrl: 'otpdata.html',
})
export class OtpdataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpdataPage');
  }

  onOtpChange(value){

  }


  userData(){

    this.navCtrl.setRoot(PasswordPage);
  }
}
