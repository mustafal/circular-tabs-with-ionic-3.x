import { SettingsPage } from '../pages/settings/settings';
import { ImagesPage } from '../pages/images/images';
import { FolderPage } from '../pages/folder/folder';
import { CameraPage } from '../pages/camera/camera';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';
import { CalenderPage } from '../pages/calender/calender';
import { CloudPage } from '../pages/cloud/cloud';
import { ContactPage } from '../pages/contact/contact';

@Injectable()
export class DummyTabs {

  tabs: any;
  badgeStyles: any;

  constructor() {
    this.tabs = [
      { root: HomePage, title: "Home", iconName: "home" },
      { root: CalenderPage, title: "Calendar", iconName: "calendar" },
      { root: CameraPage, title: "Camera", iconName: "camera" },
      { root: CloudPage, title: "Cloud", iconName: "cloud" },
      { root: ContactPage, title: "Contact", iconName: "contact" },
      { root: FolderPage, title: "Folder", iconName: "folder" },
      { root: ImagesPage, title: "Images", iconName: "images" },
      { root: SettingsPage, title: "Settings", iconName: "settings" }]
      ;

    this.badgeStyles = ["primary", "secondary", "danger", "light", "dark"];

    //set badge and badgeStyle
    this.tabs.forEach(element => {
      element.badge = Math.round((Math.random() * 100));
      element.badgeStyle = this.badgeStyles[Math.round(Math.random() * this.badgeStyles.length)];
    });

  }

  getTab(tabIndex: number, hasTitle: boolean, hasIcon: boolean, hasBadge: boolean) {
    let tab = Object.create(this.tabs[tabIndex % this.tabs.length]);

    if (!hasTitle) {
      tab.title = '';
    }

    if (!hasIcon) {
      tab.iconName = '';
    }

    if (!hasBadge) {
      tab.badge = '';
      tab.badgeStyle = '';
    }

    return tab;
  }

  getTitle(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].title;
  }

  getIconName(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].iconName;
  }

  getBadge(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].badge;
  }
  getBadgeStyle(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].badgeStyle;
  }


}
