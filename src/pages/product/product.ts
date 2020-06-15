import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {VenderPage} from "../vender/vender";
import {CartPage} from "../cart/cart";
import {ProductdetailsPage} from "../productdetails/productdetails";

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


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginservice: LoginserviceProvider) {

    this.productId = navParams.get('data');

    console.log(this.productId);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');

    this.loginservice.specificProduct(this.productId).subscribe(data=>{

      console.log(data);

      this.nameData = data['name'];

      this.productCount = data['count'];

      console.log(this.nameData);


    });

    this.loginservice.allproducts().subscribe(dataValue=>{

      console.log(dataValue);

      this.productData = dataValue;

      for(let j of dataValue){

        this.vendor.push(j.store);
      }

    });
  }


  getItems($event){

  }

  viewData(data){

    if(data===1){

      this.galleryType = 'regular';
    }else{
      this.galleryType = 'listdata';
    }

  }

  ionViewWillEnter(){




    console.log(this.vendor);




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

    for(let j of this.productData){

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

    for(let j of this.productData){

      if(data=== j.id){

        this.productDeatailsData.push(j);

        break;
      }
    }

    this.navCtrl.push(ProductdetailsPage,{data:this.productDeatailsData});
  }
}
