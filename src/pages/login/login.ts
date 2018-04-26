import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

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

  loading: Loading;
  registerCredentials = { email: '', password: '' };
  showErrorMessage : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  goToProfile(){
    this.navCtrl.push('ProfilePage');
  }

  goToRegistration(){
    if(this.navCtrl.canGoBack()){
      this.navCtrl.push('RegistrationPage');
    } else {
    this.navCtrl.push('RegistrationPage');
    }
  }


  public login() {
        this.showErrorMessage = false;
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        });
        loading.present()
        if(this.registerCredentials.email === 'sihle@mlab.co.za'){
            if(this.registerCredentials.password === 'password'){
                this.navCtrl.push(TabsPage)
            } else {
                loading.dismiss();
                this.showErrorMessage = true;
            }
        } else {
          loading.dismiss();
          this.showErrorMessage = true;
        }
    }
}
