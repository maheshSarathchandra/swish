import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ProductPage} from "../product/product";


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

  imagesData = [{urlData:'../../assets/imgs/image%204.jpg',id:'3'},{urlData:'../../assets/imgs/image%205.jpg',id:'1'},{urlData:'../../assets/imgs/image%206.jpg',id:'2'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

    this.slides.autoplayDisableOnInteraction = false;
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

this.navCtrl.push(HomePage);

console.log("this created");

 }

 pageValue(data) {

   if(data==='1'){

     this.navCtrl.push(ProductPage);
   }else{


   }

 }

}
