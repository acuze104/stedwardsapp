import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
//import { IonicStorageModule } from '@ionic/storage';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { GradesPage } from '../pages/grades/grades';
import { UserServiceProvider } from '../providers/user-service/user-service';

export const firebaseConfig = {

  apiKey: "AIzaSyABMDqOBF2WKT3gjuftRKqO96-7hNW9hDw",
  authDomain: "stedwardscatholicschool-33988.firebaseapp.com",
  databaseURL: "https://stedwardscatholicschool-33988.firebaseio.com",
  ///storageBucket: "stedwardscatholicschool-33988.appspot.com",
  messageSenderId: "913053131914"


};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    GradesPage  
],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    GradesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {

}
