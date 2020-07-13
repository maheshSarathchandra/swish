import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {AppearPage} from "../appear/appear";


/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  passwordData = {password:'',username : ''};

  userDto = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider,
              public loadingCtrl: LoadingController) {

    this.passwordData.username = navParams.get('username');

    console.log(this.passwordData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');


  }

  loginUser(){

    if(this.passwordData.password===''){

    }else {

      this.userDto.password = this.passwordData.password;
      this.userDto.username = this.passwordData.username;

      console.log(this.userDto);

      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Logging in ...'
      });

      loading.present();

      this.loginservice.usersLogin(this.userDto).then(data=> {
        console.log(data.data);

        loading.dismiss().then(() => {

          if(data.status===200) {

            this.navCtrl.setRoot(AppearPage);

          }

        });
      });

    }

  }


}

export class User{

  password: string;
  username: string;
}
