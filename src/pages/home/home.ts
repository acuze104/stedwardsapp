import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import {UserServiceProvider } from '../../providers/user-service/user-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  logPage : any;
  loggedIn :any;

  constructor(public navCtrl: NavController, private ofAuth: AngularFireAuth, private userService:UserServiceProvider) {
    this.logPage = 'LoginPage';
    this.ofAuth.auth.onAuthStateChanged(user => {
      if(user)
      {
        this.loggedIn = user.email;
      }
      else

      {
        this.loggedIn = '';

      }

    });

  }

  signOff(){
    this.userService.logOut();
    this.loggedIn = '';
     
  }
}
