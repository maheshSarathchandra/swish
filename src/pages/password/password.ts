import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {finalize} from "rxjs/operators";
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

      console.log(this.passwordData);

      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Logging in ...'
      });

      loading.present();

      this.loginservice.userLogin(this.passwordData)
        .pipe(finalize(() => loading.dismissAll()))
        .subscribe(
          data => {
            console.log(data);

            if (data) {

              this.navCtrl.setRoot(AppearPage);
            }
          }
        );

    }

  }


}
