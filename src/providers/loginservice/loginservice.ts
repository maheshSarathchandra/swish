import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Injectable()
export class LoginserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginserviceProvider Provider');
  }

  userLogin(userValue: any):Observable<any>{

    return this.http.post("https://indianrestaurant.us/wp-json/jwt-auth/v1/token",userValue)
      .pipe(tap(
        data =>{
          return data;
        }
        )
      );
  }

  userCreate(user: any):Observable<any>{

    return this.http.post("https://indianrestaurant.us/wp-json/wp/v2/users/register",user)
      .pipe(tap(
        data =>{
          return data;
        }
      ));

  }

}
