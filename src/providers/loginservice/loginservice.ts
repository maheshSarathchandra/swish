import { HttpClient } from '@angular/common/http';
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
          return data;
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

}
