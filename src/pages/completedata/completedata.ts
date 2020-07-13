import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {LocationPage} from "../location/location";
import {Dto} from "../signup/signup";
import {User} from "../password/password";
import {Storage} from "@ionic/storage";

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

  user = new User();

  passwordData = {password:'',username : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider,
              public toastController : ToastController,public storage: Storage) {
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

    this.loginservice.userCreate(this.loginUserData).then(data =>{

      console.log(data.data);

      console.log(data.status);

      if(data.status === 201){
        this.presentToast();

        this.loginUser();
      }
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'successful',
      duration: 2000
    });
    toast.present();
  }

  loginUser(){


    console.log("this is user"+this.loginUserData.password);

    console.log(this.loginUserData);

  this.user.password = this.loginUserData.password;

  this.user.username = this.loginUserData.email;

  console.log(this.user.password);

  console.log(this.user.username);



  this.loginservice.userLogin(this.user).then(data=>{

    console.log(data.data);

    console.log(data.status);

    let userData = JSON.parse(data.data);

    if(data.status === 200){

      this.storage.set('customerData',userData['user_id']);

      this.storage.set('customerEmailData',userData['user_email']);

      this.navCtrl.setRoot(LocationPage);
    }
  });
  }
}
