import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {

  data: number = 1;

  images = [{url:'../../assets/imgs/image%206%20(1).jpg',item:true},{url:'',item:false},{url:'',item:false}];

  productDeatailsData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productDeatailsData = navParams.get('data');

    console.log(this.productDeatailsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailsPage');
  }


  reduceNumber(){

    console.log("reduce number");

    if(this.data>1){

      this.data = this.data - 1;
    }


  }

  upQuntity(){

    console.log("up quantity");



    this.data = this.data + 1;

  }
}
