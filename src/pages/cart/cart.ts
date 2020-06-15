import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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



  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.cartItems = JSON.parse(localStorage.getItem('oderItems'));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }


  reduceNumber(){

    console.log("reduce number");

    if(this.data>1){

      this.data = this.data - 1;
    }


  }

  upQuntity(dataNumber){

    console.log("up quantity");





    this.data = this.data + 1;

    this.totalPrice = dataNumber + this.totalPrice;

  }

}
