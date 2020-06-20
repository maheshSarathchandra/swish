import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {LocationPage} from "../location/location";
import {Dto} from "../signup/signup";

/**
 * Generated class for the CompletedataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completedata',
  templateUrl: 'completedata.html',
})
export class CompletedataPage {



  userValue : any;

  loginUserData: Dto;

  passwordData = {password:'',username : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider,
              public toastController : ToastController) {
    this.userValue = navParams.get('userData');

    this.loginUserData = navParams.get('userData');

    console.log(this.loginUserData);
    console.log(this.userValue);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedataPage');
  }

  signUpUser(){

    console.log("enter the data");

    // this.loginservice.userCreate(this.userValue).subscribe(data =>{
    //   console.log(data);
    //
    //
    //
    //   if(data !=null){
    //     this.presentToast();
    //   }
    // });

    this.loginUser();


    this.navCtrl.setRoot(LocationPage);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'successful',
      duration: 2000
    });
    toast.present();
  }

  loginUser(){

  this.passwordData.password = this.loginUserData.password;

  this.passwordData.username = this.loginUserData.email;

  this.loginservice.userLogin(this.passwordData).subscribe(data=>{

    console.log(data);
  });
  }
}
