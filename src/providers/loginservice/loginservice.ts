import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";



@Injectable()
export class LoginserviceProvider {





  constructor(public http: HttpClient) {
    console.log('Hello LoginserviceProvider Provider');
  }

  url = 'https://demo.swish.biz/wp';

  userLogin(userValue: any):Observable<any>{

    return this.http.post(this.url+"/wp-json/jwt-auth/v1/token",userValue)
      .pipe(tap(
        data =>{
          localStorage.setItem('wpIonicToken',JSON.stringify(data));
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

    return this.http.get(this.url+"/wp-json/wc/v3/products/categories/"+id,httpOptions);
  }
}
