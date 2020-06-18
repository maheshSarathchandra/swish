import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";

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



  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App,public loginservice: LoginserviceProvider) {
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


    this.loginservice.customerData('23').subscribe(data=>{

      this.addressLineOne = data['billing']['address_1'];

      this.addressLineTwo = data['billing']['address_2'];

      this.city = data['billing']['city'];

      this.postalCode = data['billing']['postcode'];

      console.log(this.addressLineTwo);

      console.log(this.city);

      console.log(data);
    })

  }


}
