import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {DashboardPage} from "../dashboard/dashboard";
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult} from "@ionic-native/native-geocoder";
import {ChangedataPage} from "../changedata/changedata";

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

  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;


  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };



  constructor(public navCtrl: NavController, public navParams: NavParams, public geoLocation: Geolocation, public nativeGeocoder: NativeGeocoder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }


  detectMyLocation(){

    this.geoLocation.getCurrentPosition().then((res)=>{


      this.geoLatitude = res.coords.latitude;
      this.geoLongitude = res.coords.longitude;
      this.geoAccuracy = res.coords.accuracy;

      this.getGeoCoder(this.geoLongitude,this.geoLongitude);


      console.log(this.geoLatitude+","+this.geoLongitude);
    }).catch((error)=>{

      console.log("Error getting location"+JSON.stringify(error));
    });

  this.navCtrl.push(ChangedataPage,{data:this.geoAddress});

  }



  getGeoCoder(latitude,longitude){

    this.nativeGeocoder.reverseGeocode(latitude,longitude, this.options)
      .then((result: NativeGeocoderReverseResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);

      })
      .catch((error: any) => console.log("Error getting location"+error));
  }


  generateAddress(addressObj){
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
        address += obj[val]+', ';
    }
    return address.slice(0, -2);
  }


  setYourLocationManually(){


    this.navCtrl.push(ChangedataPage);
  }

}
