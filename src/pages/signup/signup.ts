import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OtpsignupPage} from "../otpsignup/otpsignup";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

   userData = {firstname:'',lastname:'', phoneNumber:'',email:'',password:'',confirmpassword:''};


   userDataValues = { first_name :'',last_name :'',email :'',password:'',phone:''};





   userDto = new Dto();


  constructor(public navCtrl: NavController, public navParams: NavParams,public loginserviceProvider : LoginserviceProvider) {


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp() {

    if(this.userData.password==this.userData.confirmpassword){

      this.userDto.first_name = this.userData.firstname;
      this.userDto.last_name = this.userData.lastname;
      this.userDto.email = this.userData.email;
        let p = this.userData.phoneNumber.charAt(0);

        let phoneNumberData;

        if(p==="0"){
        phoneNumberData = this.userData.phoneNumber.substr(1);
        }else{

        }

        let countryCode = "+94";
        phoneNumberData = countryCode.concat(phoneNumberData);

        this.userDto.phone = phoneNumberData;

      this.userDto.password = this.userData.confirmpassword;

      console.log("created");

      console.log(this.userDto);

      this.loginserviceProvider.userCreateData(this.userDto).then(data=>{
        console.log(data.status);
      });


    this.navCtrl.setRoot(OtpsignupPage, {userDataItems:this.userDto});
      }else{
        console.log("data not valid");
      }



    }



}

export class Dto {

  first_name : string;
  last_name : string;
  email : string;
  password: string;
  phone: string;
  otp: string;

}


