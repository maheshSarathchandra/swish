import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {VenderPage} from "../vender/vender";
import {CartPage} from "../cart/cart";
import {ProductdetailsPage} from "../productdetails/productdetails";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {


  galleryType = 'regular';


  nameData: string;

  productCount: number;

  vendor = [];

  vendorData = [];

  cartData = [];

  productDeatailsData = [];

  favoriteItems = [];

  cartDataItems : number = 0;

  dataItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice: LoginserviceProvider,public storage: Storage) {


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');


  }

  initializeItems(){

    this.dataItems = this.favoriteItems;
  }


  getItems(ev : any){

    this.initializeItems();

    var val = ev.target.value;

    if (val && val.trim() != "") {
      this.dataItems = this.dataItems.filter(data => {
        return data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }

  }

  viewData(data){

    if(data===1){

      this.galleryType = 'regular';
    }else{
      this.galleryType = 'listdata';
    }

  }

  ionViewWillEnter(){

    this.storage.get('favoriteItems').then((val)=>{

      this.favoriteItems = JSON.parse(val);

      console.log(this.favoriteItems);

      for(let j of this.favoriteItems){

        this.vendor.push(j.store);
      }

      this.dataItems = this.favoriteItems;

      console.log(this.vendor);
    });


    let cartItems = [];

    this.storage.get('oderItems').then((val)=>{

      if(val===null){

        this.cartDataItems = 0;
      }else{

        this.storage.get('oderItems').then((val)=>{

          cartItems = JSON.parse(val);

          this.cartDataItems = cartItems.length;
        });


      }
    });



  }


  venderDetails(data){

    for(let j of this.vendor){

      if(data===j.vendor_id){
        this.vendorData.push(j);

        break;
      }
    }


    this.navCtrl.push(VenderPage,{vendorData: this.vendorData});

  }


  cartItems(data){

    for(let j of this.favoriteItems){

      if(data=== j.id){

        this.cartData.push(j);

        break;
      }
    }

    this.loginservice.saveCartItems(this.cartData);

    this.navCtrl.push(CartPage);
  }

  productDeatails(data){

    this.productDeatailsData = [];

    for(let j of this.favoriteItems){

      if(data=== j.id){

        this.productDeatailsData.push(j);

        break;
      }
    }

    this.navCtrl.push(ProductdetailsPage,{data:this.productDeatailsData});
  }


  openCart(){

    this.navCtrl.push(CartPage);
  }
}
