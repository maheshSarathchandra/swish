import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {VenderPage} from "../vender/vender";

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
  imagesData = [{urlData:'../../assets/imgs/image%204.jpg',id:'3'},{urlData:'../../assets/imgs/image%205.jpg',id:'1'},{urlData:'../../assets/imgs/image%206.jpg',id:'2'}];

  productId: number;

  productData;

  nameData: string;

  productCount: number;
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

      this.productData = data;
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


  }


  venderDetails(){


    this.navCtrl.push(VenderPage);

  }
}
