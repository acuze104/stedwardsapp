import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { AngularFireAuth } from 'angularfire2/auth';
import {UserServiceProvider } from '../../providers/user-service/user-service'
import * as firebase from 'firebase/app';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg = {
    email :'',
    password : '',
    password2 : ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ofAuth : AngularFireAuth, public userProvider : UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerAccount() {
    if(this.reg.password != this.reg.password2){
      this.userProvider.displayAlert('Password Problem', 'Passwords do not match, please try again');
      this.reg.password = '';
      this.reg.password2 = '';
    }
    else{ 
      this.ofAuth.auth.createUserWithEmailAndPassword(this.reg.email, this.reg.password)
        .then(res => this.regSuccess(res))
        .catch(err => this.userProvider.displayAlert('Error!', err));

    }
  } 

  regSuccess(result){
    this.userProvider.displayAlert(result.email, 'Account created for this email address');
    this.ofAuth.auth.signInWithEmailAndPassword(this.reg.email, this.reg.password)
      .then(res => this.navCtrl.push(HomePage)) 
      .catch(err => this.userProvider.displayAlert('Error!', err));
  }
}
