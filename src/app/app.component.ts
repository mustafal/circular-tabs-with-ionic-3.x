import { TabsbottomPage } from '../pages/tabsbottom/tabsbottom';
import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { Tabsbottom2Page } from '../pages/tabsbottom2/tabsbottom2';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform,
    private loadingCtrl: LoadingController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.rootPage = LandingPage
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: 'Tabs Bottom', component: TabsbottomPage },
        { title: 'Tabs Bottom Type 2', component: Tabsbottom2Page }
      ];
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    loading.present();

    this.nav.setRoot(page.component).then(() => {
      loading.dismiss();
    });
  }

  openRootPage() {
    this.nav.goToRoot({});
  }

}

