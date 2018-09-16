import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { AngularFireAuth } from 'angularfire2/auth';
import {UserServiceProvider } from '../../providers/user-service/user-service'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  regPage: any;
  reg = {
    email :'',
    password : '',
    password2 : ''
  }

  usr = {
    email :'',
    password :''

  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ofAuth : AngularFireAuth, public userProvider : UserServiceProvider) {
  }

  login(){
    this.userProvider.login(this.usr.email, this.usr.password)
     .then(res => this.navCtrl.push(HomePage)) 
     .catch(err => this.userProvider.displayAlert('Error!', err));
  }

  registerAccount() {
    if(this.reg.password != this.reg.password2){
      this.userProvider.displayAlert('Password Problem', 'Passwords do not match, please try again');
      this.reg.password = '';
      this.reg.password2 = '';
    }
    else{ 
      this.userProvider.register(this.reg.email, this.reg.password)
        .then(res => this.regSuccess(res))
        .catch(err => this.userProvider.displayAlert('Error', err));

    }
  } 

  regSuccess(result){
    this.userProvider.displayAlert(result.email, 'Account created for this email address');
    this.ofAuth.auth.signInWithEmailAndPassword(this.reg.email, this.reg.password)
      .then(res => this.navCtrl.push(HomePage)) 
      .catch(err => this.userProvider.displayAlert('Error', err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
