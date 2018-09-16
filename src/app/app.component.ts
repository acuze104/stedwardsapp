import { Nav, Platform } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { GradesPage } from '../pages/grades/grades';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Login', component: LoginPage },
        { title: 'Pay Tuition', component: HomePage },
        { title: 'Grade Link', component: GradesPage },
        { title: 'Service Hours', component: HomePage },
        { title: 'Settings', component: SettingsPage },
        { title: 'Contact Us', component: HomePage }
      ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

