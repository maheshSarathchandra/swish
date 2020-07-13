import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {DashboardPage} from "../dashboard/dashboard";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  data: number = 0;

  showValue: boolean = false;


  totalPrice: number = 0;


  imagesData = [{urlData:'../../assets/imgs/image%204.jpg',id:'3'},{urlData:'../../assets/imgs/image%205.jpg',id:'1'}];

  cartItems = [];




  specificItem = [];

  cartGetItems = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider,public storage: Storage) {




     this.storage.get('oderItems').then((val)=>{

       this.cartItems = JSON.parse(val);


       for(let j of this.cartItems){

         let   specificData = {id:'',numberOfData:'',name:'',vendor:'',price:''};

         console.log(j);


         specificData.id = j.id;

         specificData.numberOfData = String(this.data);

         specificData.name = j.name;

         specificData.vendor = j.store.vendor_display_name;

         specificData.price = j.price;

         this.specificItem.push(specificData);


         console.log(this.specificItem);

       }
    });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }


  reduceNumber(dataNumber){

    console.log("reduce number");


    for(let j of this.cartItems){

      if(dataNumber.id=== j.id){

        console.log(this.totalPrice);

        console.log(j.price);





        this.totalPrice = this.totalPrice- parseFloat(j.price);

        break;
      }



    }

    for(let j of this.specificItem){

      if(dataNumber.id=== j.id){

        this.data = parseInt(j.numberOfData) - 1;


        j.numberOfData = String(this.data);
      }
    }


  }



  upQuntity(dataNumber){

    console.log("up quantity");









    for(let j of this.cartItems){

      if(dataNumber.id=== j.id){

        console.log(this.totalPrice);

        console.log(j.price);





        this.totalPrice = this.totalPrice+ parseFloat(j.price);

        break;
      }



    }

    for(let j of this.specificItem){

      if(dataNumber.id=== j.id){

        this.data = parseInt(j.numberOfData) + 1;


        j.numberOfData = String(this.data);
      }
    }

  }


  removeItems(productData){

    console.log(this.cartItems);

    for(let j of this.cartItems){

      if(productData.id=== j.id){

       this.cartItems.splice(j,1);

        break;
      }


    }

  this.loginservice.removeCartItems(productData);

    console.log("data");

  }

  dashboardPageData(){


    this.navCtrl.setRoot(DashboardPage);

  }

}
