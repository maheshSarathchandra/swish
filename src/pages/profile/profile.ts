import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {Storage} from "@ionic/storage";

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

  showDashbord = false;

  showingValueDashboard = 'arrow-dropdown';

  showDownloads = false;

  showingValueDownload = 'arrow-dropdown';


  showAddresses = false;

  showingValueAddresses = 'arrow-dropdown';

  addressLineOne: string;

  addressLineTwo: string;

  city: string;

  postalCode: string;



  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App,public loginservice: LoginserviceProvider,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');


  }

  logOutUser(){


    this.storage.remove('wpIonicToken').then((data)=>{

      console.log(data);

      this.app.getRootNav().setRoot(LoginPage);
    });


    console.log("clear data");
  }

  showDashboard() {

    if(this.showDashbord){

      this.showDashbord = false;

      this.showingValueDashboard = 'arrow-dropdown';


    }else{

      this.showDashbord = true;

      this.showingValueDashboard = 'arrow-dropup'

    }

    console.log("this is dashboard");
  }


  showDownload(){

    if(this.showDownloads){

      this.showDownloads = false;

      this.showingValueDownload = 'arrow-dropdown';


    }else{

      this.showDownloads = true;

      this.showingValueDownload = 'arrow-dropup'

    }

  }



  showAddress(){

    if(this.showAddresses){

      this.showAddresses = false;

      this.showingValueAddresses = 'arrow-dropdown';


    }else{

      this.showAddresses = true;

      this.showingValueAddresses = 'arrow-dropup'

    }



    this.storage.get('customerData').then((val)=> {

      console.log("customer data" + val);

      let id = String(val);



      this.loginservice.customerData(id).then(data => {

        console.log("profile data" + JSON.parse(data.data));

        let userData = JSON.parse(data.data);

        this.addressLineOne = userData['billing']['address_1'];

        this.addressLineTwo = userData['billing']['address_2'];

        this.city = userData['billing']['city'];

        this.postalCode = userData['billing']['postcode'];

        console.log(this.addressLineTwo);

        console.log(this.city);

        console.log(JSON.parse(data.data));
      });
    });
  }


}
