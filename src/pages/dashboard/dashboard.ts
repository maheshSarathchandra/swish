import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {ProductPage} from "../product/product";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {CartPage} from "../cart/cart";
import {ProductdetailsPage} from "../productdetails/productdetails";


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild(Slides) slides: Slides;

  images = [{url:'../../assets/imgs/image%201.png',item:true},{url:'',item:false},{url:'',item:false}];

  galleryType = 'regular';

  imagesData;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginservice: LoginserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

    this.slides.autoplayDisableOnInteraction = false;

    this.loginservice.availableProducts().subscribe(data=>{

      console.log(data);

      this.imagesData = data;
    })
  }

  public ionViewWillLeave(){
    this.slides.stopAutoplay();
  }


  ionViewWillEnter(){

    console.log('ionViewDidLoad DashboardPage 1');


    this.slides.autoplayDisableOnInteraction = false;


    this.slides.startAutoplay();




  }






  oderItem(){

this.navCtrl.push(ProductdetailsPage);

console.log("this created");

 }

 pageValue(data) {

    console.log(data);

     this.navCtrl.push(ProductPage,{data:data});

 }

 openCart(){

    this.navCtrl.push(CartPage);
 }

}
