import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {AppearPage} from "../appear/appear";
import {Storage} from "@ionic/storage";

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

 id : string;

  addressData = {first_name:'',
     last_name:'',
     company:'',
     address_1:'',
     address_2:'',
     city:'',
     postcode:'',
     country:'',
     state:'',
     email:'',
     phone:''};

 ccustomerData = new ChangeCustomer();

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice : LoginserviceProvider,
              public loadingCtrl: LoadingController,public storage: Storage) {

    this.data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangedataPage');

    this.storage.get('customerEmailData').then((val)=>{

      this.addressData.email = val;
    });

    this.storage.get('customerData').then((val)=>{

      this.id = val;

    });

  }

  saveData(){

    console.log(this.data);

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    let dataItems = this.data.split(',');


    this.addressData.address_1 = dataItems[0];

    this.addressData.address_2 = dataItems[1];

    this.addressData.city = dataItems[2];


    console.log("this save data");

    this.ccustomerData.address_1 = this.addressData.address_1;

    this.ccustomerData.address_2 = this.addressData.address_2;

    this.ccustomerData.city = this.addressData.city;

    this.ccustomerData.email = this.addressData.email;

    this.loginservice.changeCustomer(this.ccustomerData,this.id).then(data=>{

      loading.dismiss().then(()=>{

        if(data.status===200){

          this.navCtrl.setRoot(AppearPage);
        }


      });

    });
  }


}

export class ChangeCustomer {

  address_1: string;
  address_2: string;
  city: string;
  email: string;

}
