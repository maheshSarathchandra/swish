import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {ProductPage} from "../product/product";
import {LoginserviceProvider} from "../../providers/loginservice/loginservice";
import {CartPage} from "../cart/cart";
import {ProductdetailsPage} from "../productdetails/productdetails";
import {Storage} from "@ionic/storage";


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


  cartDataItems : number = 0;



  imageDataItems = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginservice: LoginserviceProvider,public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

    this.slides.autoplayDisableOnInteraction = false;

    this.loginservice.availableProducts().then(data=>{

      console.log(JSON.parse(data.data));

      this.imagesData = JSON.parse(data.data);


      for(let j of this.imagesData){

        let  imageUrls = {id:'', url:''};

        imageUrls.id = j.id;

        if(j.image===null){
          imageUrls.url = '../../assets/imgs/no%20images.jpg';

        }else{
          imageUrls.url = j.image.src;

        }

        this.imageDataItems.push(imageUrls);

      }
    })




  }

  public ionViewWillLeave(){
    this.slides.stopAutoplay();
  }




  ionViewWillEnter(){

    console.log('ionViewDidLoad DashboardPage 1');


    this.slides.autoplayDisableOnInteraction = false;


    this.slides.startAutoplay();


    let cartItems = [];

    this.storage.get('oderItems').then((val)=>{

      console.log(val);

      if(val===null){

        this.cartDataItems = 0;

      }else{

        this.storage.get('oderItems').then((val)=>{

          cartItems = JSON.parse(val);

          console.log(cartItems);

          this.cartDataItems = cartItems.length;
        });
      }
    });

  console.log(this.cartDataItems);
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
