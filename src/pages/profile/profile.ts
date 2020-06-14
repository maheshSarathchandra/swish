import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  showContent = false;

  showingValueData = 'arrow-dropdown';

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');


  }

  logOutUser(){

    //localStorage.clear();



    localStorage.removeItem('wpIonicToken');

    if(localStorage.getItem('wpIonicToken')){

    }else{

      this.app.getRootNav().setRoot(LoginPage);
    }


    console.log("clear data");
  }

  showData() {

    if(this.showContent){

      this.showContent = false;

      this.showingValueData = 'arrow-dropdown';


    }else{

      this.showContent = true;

      this.showingValueData = 'arrow-dropup'

    }

  }



}
