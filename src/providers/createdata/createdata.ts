import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

/*
  Generated class for the CreatedataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreatedataProvider {

  url = 'https://demo.swish.biz/wp';

  constructor(public http: HttpClient) {
    console.log('Hello CreatedataProvider Provider');
  }

  userLogin(data:any):Observable<any>{

   return this.http.post(this.url+"/wp-json/jwt-auth/v1/token",data)
      .pipe(tap(data=>{

           console.log(data);
        }

        )
      );
  }

}
