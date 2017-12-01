import { ImagesPage } from '../images/images';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CalenderPage } from '../calender/calender';
import { CameraPage } from '../camera/camera';
import { CloudPage } from '../cloud/cloud';
import { ContactPage } from '../contact/contact';
import { FolderPage } from '../folder/folder';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  homeCtrl: any;
  calendarCtrl: any;
  cameraCtrl: any;
  cloudCtrl: any;
  contactCtrl: any;
  folderCtrl: any;
  imagesCtrl: any;
  mapCtrl: any;
  settingsCtrl: any;

  tabSettings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.homeCtrl = HomePage
    this.calendarCtrl = CalenderPage
    this.cameraCtrl = CameraPage
    this.cloudCtrl = CloudPage
    this.contactCtrl = ContactPage
    this.folderCtrl = FolderPage
    this.imagesCtrl = ImagesPage
    this.settingsCtrl = SettingsPage
  }

}
