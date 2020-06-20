import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";



@Injectable()
export class LoginserviceProvider {


  cartItems = {};

  cartGetItems = [];

  favoriteItems = [];


  constructor(public http: HttpClient) {
    console.log('Hello LoginserviceProvider Provider');



    this.cartGetItems = JSON.parse(localStorage.getItem('oderItems'));

    this.favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));


    console.log(this.cartGetItems);

    console.log(this.favoriteItems);
  }

  url = 'https://demo.swish.biz/wp';

  userLogin(userValue: any):Observable<any>{

    return this.http.post(this.url+"/wp-json/jwt-auth/v1/token",userValue)
      .pipe(tap(
        data =>{
          localStorage.setItem('wpIonicToken',data['token']);

        }
        )
      );


  }

  userCreate(user: any):Observable<any>{

    return this.http.post(this.url+"/wp-json/wc/v3/customers/register",user,{observe:"response"})
      .pipe(tap(
        data =>{
          return data;
        }
      ));

  }


  appInfo(){

    return this.http.get(this.url+"/wp-json/wp/v2/app/info")
      .pipe(tap(
        data=>{


          localStorage.setItem('woocommerce_consumer_key',data['woocommerce']['api']['consumer_key']);
          localStorage.setItem('woocommerce_consumer_secret',data['woocommerce']['api']['consumer_secret']);

        }
      ));
  }

  availableProducts(){


    const httpOptions = {


      headers: new HttpHeaders({
        'Authorization': 'Basic '+ btoa(localStorage.getItem('woocommerce_consumer_key')+':'+localStorage.getItem('woocommerce_consumer_secret'))
      })
    };




    return this.http.get(this.url+"/wp-json/wc/v3/products/categories",httpOptions)
      .pipe(tap(
        data=>{
          return data;
        }
      ));
  }

  specificProduct(id){

    const httpOptions = {


      headers: new HttpHeaders({
        'Authorization': 'Basic '+ btoa(localStorage.getItem('woocommerce_consumer_key')+':'+localStorage.getItem('woocommerce_consumer_secret'))
      })
    };

    return this.http.get(this.url+"/wp-json/wc/v3/products/categories/"+id,httpOptions)
      .pipe(tap(data=>{

        return data;
      }));
  }


  allproducts():Observable<any>{

    const httpOptions = {


      headers: new HttpHeaders({
        'Authorization': 'Basic '+ btoa(localStorage.getItem('woocommerce_consumer_key')+':'+localStorage.getItem('woocommerce_consumer_secret'))
      })
    };

    return this.http.get(this.url+"/wp-json/wc/v3/products",httpOptions)
      .pipe(tap(data=>{

        return data;
      }));
  }

  saveCartItems(data){

    if(data===null){


    }else {



      console.log(this.cartGetItems);

     this.cartGetItems.push(data[0]);

      console.log(this.cartGetItems);




      localStorage.setItem('oderItems', JSON.stringify(this.cartGetItems));







    }

  }

  removeCartItems(dataItems){

    this.cartGetItems = JSON.parse(localStorage.getItem('oderItems'));

    for(let j of this.cartGetItems){

      if(dataItems.id=== j.id){

       this.cartGetItems.splice(j,1);

        break;
      }


    }

    localStorage.removeItem('oderItems');


    localStorage.setItem('oderItems', JSON.stringify(this.cartGetItems));



  }

  saveFavorite(data){


    if(data===null){


    }else {



      console.log(this.favoriteItems);

     this.favoriteItems.push(data[0]);

      console.log(this.favoriteItems);




      localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteItems));







    }

  }

  customerData(userId){

    const httpOptions = {


      headers: new HttpHeaders({
        'Authorization': "Bearer "+ String(localStorage.getItem('wpIonicToken'))
      })
    };


    return this.http.get(this.url+"/wp-json/wc/v3/customers/"+userId,httpOptions)
      .pipe(tap(data=>{

        localStorage.setItem('customerData',JSON.stringify(data));

        console.log(data);


        }));
  }
}
