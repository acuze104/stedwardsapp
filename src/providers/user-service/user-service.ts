//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
import { AlertController  } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
//import { FirebaseDatabase } from 'angularfire2';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

 // items : AngularFireList<any>;

  constructor(private ofAuth : AngularFireAuth, private alertCtrl : AlertController//,
          //   private storage: Storage, private fdb : AngularFireDatabase
          )
           {
    
     // this.items = fdb.list('/users');
  }

  login(userName, password) {
    return this.ofAuth.auth.signInAndRetrieveDataWithEmailAndPassword(userName,password);
  }

  register(userName, password) {
    return this.ofAuth.auth.createUserWithEmailAndPassword(userName,password);
  }
  
  logOut(){
    
    this.ofAuth.auth.signOut()
      .then(LoggedOut =>  this.displayAlert('Logged Out' , 'Come back soon'))
      .catch(err => this.displayAlert('Error!', err));

  }

  displayAlert(alertTitle, alertSub){
    let theAlert = this.alertCtrl.create( {
        title : alertTitle,
        subTitle : alertSub,
        buttons : ['OK']

    });
    theAlert.present();
  }

}
