import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  phonenumber() {
    this.navCtrl.push('PhonenumberPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
