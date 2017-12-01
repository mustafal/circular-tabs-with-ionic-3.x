import { AdMobPro } from '@ionic-native/admob-pro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admob: AdMobFree, private platform: Platform) { }

  // ionViewDidLoad() {
  //   const bannerConfig: AdMobFreeBannerConfig = {
  //     id: 'ca-app-pub-9640279095092651/4366800904',
  //     isTesting: true,
  //     autoShow: true
  //   };
  //   this.admob.banner.config(bannerConfig);

  //   this.admob.banner.prepare()
  //     .then(() => {
  //     })
  //     .catch(e => alert(e));
  // }

}
