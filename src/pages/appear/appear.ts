import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from "../dashboard/dashboard";
import {FavoritePage} from "../favorite/favorite";
import {SelectPage} from "../select/select";
import {SearchPage} from "../search/search";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the AppearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-appear',
  templateUrl: 'appear.html',
})
export class AppearPage {

  tabRoot1 = DashboardPage;
  tabRoot2 = FavoritePage;
  tabRoot3 = SelectPage;
  tabRoot4 = SearchPage;
  tabRoot5 = ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppearPage');
  }



}
