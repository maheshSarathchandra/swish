import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompletedataPage} from "../completedata/completedata";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpsignupPage');
  }

  onOtpChange(value){

  }

  users(){

    this.navCtrl.setRoot(CompletedataPage);
  }
}
