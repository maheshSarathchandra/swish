import {HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {HTTP} from "@ionic-native/http";
import {User} from "../../pages/password/password";
import {Dto} from "../../pages/signup/signup";
import {ChangeCustomer} from "../../pages/changedata/changedata";



@Injectable()
export class LoginserviceProvider {


  cartItems = {};

  cartGetItems = [];

  favoriteItems = [];

  app: any;

  url = 'https://demo.swish.biz/wp';

  consumer_key: string;

  consumer_secret:string;

  wpIonicToken: string;



  cartOredrItems: any;

  favoriteData: any;


  constructor(public http: HTTP,public storage: Storage) {
    console.log('Hello LoginserviceProvider Provider');

      this.storage.get('oderItems').then((val)=>{

        this.cartOredrItems = val;

        if(this.cartOredrItems===null){

          this.cartGetItems = [];

        }else{

          this.storage.get('oderItems').then((val)=>{

            this.cartGetItems = JSON.parse(val);
          });
        }
        console.log(this.cartGetItems);
      });

    this.storage.get('favoriteItems').then((val)=>{

      this.favoriteData = val;

      if(this.favoriteData===null){

        this.favoriteItems = [];

      }else {


        this.storage.get('favoriteItems').then((val)=>{

          this.favoriteItems = JSON.parse(val);
        });
      }

      console.log(this.favoriteItems);
    });

  }

  userLogin(user:User): Promise<any> {



    return this.http.post(this.url+"/wp-json/jwt-auth/v1/token",{username:user.username,password:user.password},{'Content-Type': 'application/json'})
      .then(data => {

           let user = JSON.parse(data.data);
           this.storage.set('wpIonicToken', user['token']);

           this.storage.set('customerData',user['user_id']);

           this.storage.get('wpIonicToken').then((val)=>{

             console.log(val);

             this.wpIonicToken = val;
           });

        console.log(data.data);

        return data;

        }).catch(error=>{
         console.log(error.status);
      });


  }

  userCreateData(user: Dto): Promise<any> {

    console.log(user.first_name);


    return this.http.post(this.url+"/wp-json/wc/v3/customers/register", {first_name:user.first_name,last_name:user.last_name,email:user.email,password:user.password,phone:user.phone},{'Content-Type': 'application/json'})
      .then(data => {

          return data;

        });

  }




  appInfo() {

    return this.http.get(this.url+"/wp-json/wp/v2/app/info",{},{'Content-Type': 'application/json'})
      .then(data =>{

          this.app = JSON.parse(data.data);


          this.storage.set('woocommerce_consumer_key', this.app['woocommerce']['api']['consumer_key']);
          this.storage.set('woocommerce_consumer_secret', this.app['woocommerce']['api']['consumer_secret']);

        this.storage.get("woocommerce_consumer_key").then((val)=>{

          this.consumer_key = val;

          console.log(this.consumer_key);

        });

        this.storage.get("woocommerce_consumer_secret").then((val)=>{

          this.consumer_secret = val;

          console.log(this.consumer_secret);

        });




        }).catch(error=>{

        console.log(error);

      });
  }

  availableProducts() {


    return this.http.get(this.url+"/wp-json/wc/v3/products/categories",{},this.http.getBasicAuthHeader(this.consumer_key,this.consumer_secret))
      .then(
        data => {
          return data;
        }
      );
  }

  specificProduct(id) {


    console.log(id);



    return this.http.get(this.url+"/wp-json/wc/v3/products/categories/"+id, {},this.http.getBasicAuthHeader(this.consumer_key,this.consumer_secret))
      .then(data => {

        return data;
      });
  }


  allproducts(id): Promise<any> {

    console.log(id);


    return this.http.get(this.url+"/wp-json/wc/v3/products?category="+id,{},this.http.getBasicAuthHeader(this.consumer_key,this.consumer_secret))
      .then(data => {

        return data;
      });
  }


  saveCartItems(data) {

    if (data === null) {

      console.log("this is null");


    } else {


      console.log(this.cartGetItems);

      this.cartGetItems.push(data[0]);

      console.log(this.cartGetItems);

      this.storage.set('oderItems', JSON.stringify(this.cartGetItems)).then(data=>{

        console.log(data);
        })

    }

  }


  removeCartItems(dataItems) {

     this.storage.get('oderItems').then((val)=>{

      this.cartGetItems = JSON.parse(val);

    });

    for (let j of this.cartGetItems) {

      if (dataItems.id === j.id) {

        this.cartGetItems.splice(j, 1);

        break;
      }

    }

    this.storage.remove('oderItems').then(()=>{

      console.log("removed item");
    });

    this.storage.set('oderItems', JSON.stringify(this.cartGetItems));

  }


  saveFavorite(data) {


    if (data === null) {


    } else {

      console.log(this.favoriteItems);

      this.favoriteItems.push(data[0]);

      console.log(this.favoriteItems);

      this.storage.set('favoriteItems', JSON.stringify(this.favoriteItems));

    }

  }


  customerData(userId) {

    console.log("customer id" + userId);

    console.log(this.wpIonicToken);


    return this.http.get(this.url+"/wp-json/wc/v3/customers/" + userId,{} ,{'Authorization': "Bearer " + String(this.wpIonicToken)})
      .then(data => {

       // localStorage.setItem('customerData', JSON.stringify(data));

        console.log(data);

         return data;
      });
  }

  changeCustomer(data: ChangeCustomer, id):Promise<any>{

    console.log(data.email);


    console.log(id);


    console.log("customer change values"+ this.wpIonicToken);


  return this.http.put(this.url+"/wp-json/wc/v3/customers/" + id,{"address_1":data.address_1,"address_2":data.address_2,"city":data.city,"email":data.email},{'Content-Type': 'application/json','Authorization': "Bearer " + String(this.wpIonicToken)})
    .then(data => {

      console.log(data.data);

        return data;
        })
    .catch(error=>{

      console.log(error);
    });

  }

  userCreate(user: Dto): Promise<any> {

    console.log("signup user"+user);

    console.log(user.otp);


    return this.http.post(this.url+"/wp-json/wc/v3/customers/register",{first_name:user.first_name,last_name:user.last_name,email:user.email,password:user.password,phone:user.phone,otp:user.otp},{'Content-Type': 'application/json'})
      .then(data => {
          return data;
        }
      );

  }

  usersLogin(user:User): Promise<any> {



    return this.http.post(this.url+"/wp-json/jwt-auth/v1/token",{username:user.username,password:user.password},{'Content-Type': 'application/json'})
      .then(data => {

        let user = JSON.parse(data.data);
        this.storage.set('wpIonicToken', user['token']);

        this.storage.set('customerData',user['user_id']);

        this.storage.get('wpIonicToken').then((val)=>{

          console.log(val);

          this.wpIonicToken = val;
        });

        console.log(data.data);

        return data;

      }).catch(error=>{
        console.log(error.status);
      });


  }

}
