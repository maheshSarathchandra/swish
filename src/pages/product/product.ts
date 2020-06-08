import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }


  getItems($event){

  }

  viewData(data){

    if(data===1){

      this.galleryType = 'regular';
    }else{
      this.galleryType = 'pinterest';
    }

  }
}
