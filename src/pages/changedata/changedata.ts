import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangedataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changedata',
  templateUrl: 'changedata.html',
})
export class ChangedataPage {

 public data: string;

 addressData = {billing:{first_name:'',
     last_name:'',
     company:'',
     address_1:'',
     address_2:'',
     city:'',
     postcode:'',
     country:'',
     state:'',
     email:'',
     phone:''}};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangedataPage');



  }

  saveData(){

    console.log(this.data);

    let dataItems = this.data.split(',');


    this.addressData.billing.address_1 = dataItems[0];

    this.addressData.billing.address_2 = dataItems[1];

    this.addressData.billing.city = dataItems[2];

    console.log("this save data");
  }


}
