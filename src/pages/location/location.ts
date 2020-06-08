import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {DashboardPage} from "../dashboard/dashboard";

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

latitudeData: number;

longitudeData: number;

accuracyData: number;



  constructor(public navCtrl: NavController, public navParams: NavParams, public locationData: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }


  detectMyLocation(){

    this.locationData.getCurrentPosition().then((data)=>{

      this.latitudeData = data.coords.latitude;

      this.longitudeData = data.coords.longitude;

      this.accuracyData = data.coords.accuracy;

    });

    this.navCtrl.setRoot(DashboardPage);
  }

  setYourLocationManually(){


  }
}
