import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {VenderPage} from "../vender/vender";
import {CartPage} from "../cart/cart";
import {ProductdetailsPage} from "../productdetails/productdetails";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  item = {};

  galleryType = 'regular';

  productId: number;

  productData;

  nameData: string;

  productCount: number;

 vendor = [];

 vendorData = [];

 cartData = [];

 productDeatailsData = [];

 productItems = [];

 cartDataItems : number = 0;




  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginservice: LoginserviceProvider,public storage: Storage) {

    this.productId = navParams.get('data');

    console.log(this.productId);


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');

    this.loginservice.specificProduct(this.productId).then(data=>{

      console.log(JSON.parse(data.data));


      let val = JSON.parse(data.data);

      this.nameData = val['name'];

      this.productCount = val['count'];

      console.log(this.nameData);


    });

    this.loginservice.allproducts(this.productId).then(dataValue=>{

      console.log(JSON.parse(dataValue.data));

      this.productData = JSON.parse(dataValue.data);

      this.productItems = this.productData;

      for(let j of dataValue){

        this.vendor.push(j.store);
      }

    });
  }

  initializeItems(){

    this.productItems = this.productData
  }



  getItems(ev : any){

    this.initializeItems();

    var val = ev.target.value;

    console.log(val);


    if (val && val.trim() != "") {
      this.productItems = this.productItems.filter(data => {
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


    console.log(this.cartDataItems);

    console.log(this.vendor);

    let cartItems = [];


    this.storage.get('oderItems').then((val)=>{

      if(val === null){

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

    console.log(data);

    for(let j of this.productData){

      console.log(j);

      if(data=== j.id){

        console.log(j);

        this.cartData.push(j);

        break;
      }
    }

    this.loginservice.saveCartItems(this.cartData);

   this.navCtrl.push(CartPage);
  }

  productDeatails(data){

    this.productDeatailsData = [];

    for(let j of this.productData){

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
