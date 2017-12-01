import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabsbottomPage } from '../pages/tabsbottom/tabsbottom';
import { SettingsPage } from '../pages/settings/settings';
import { LandingPage } from '../pages/landing/landing';
import { FolderPage } from '../pages/folder/folder';
import { ContactPage } from '../pages/contact/contact';
import { CloudPage } from '../pages/cloud/cloud';
import { CameraPage } from '../pages/camera/camera';
import { CalenderPage } from '../pages/calender/calender';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CircularTabs } from '../components/circular-tabs/circular-tabs';
import { DummyTabs } from '../providers/dummy-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdMobFree } from '@ionic-native/admob-free';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Tabsbottom2Page } from '../pages/tabsbottom2/tabsbottom2';
import { ImagesPage } from '../pages/images/images';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalenderPage,
    CameraPage,
    CloudPage,
    ContactPage,
    FolderPage,
    LandingPage,
    SettingsPage,
    Tabsbottom2Page,
    TabsbottomPage,
    ImagesPage,
    CircularTabs
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalenderPage,
    CameraPage,
    CloudPage,
    ContactPage,
    FolderPage,
    LandingPage,
    SettingsPage,
    Tabsbottom2Page,
    TabsbottomPage,
    ImagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobPro,
    AdMobFree,
    DummyTabs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
