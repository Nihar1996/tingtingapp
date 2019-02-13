import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the ConfirmpinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmpin',
  templateUrl: 'confirmpin.html',
})
export class ConfirmpinPage {@Input() pagetitle: String = "Confirm Pin";

confirmpin:string= "";

@Output() change: EventEmitter<string> = new EventEmitter<string>();

constructor(public navCtrl: NavController) {}

emitEvent() {
  this.change.emit(this.confirmpin);
  this.navCtrl.setRoot(ProfilePage, {}, {animate: true, direction: 'forward'});

}

handleInput(confirmpin: string) {
  if (confirmpin === "clear") {
    this.confirmpin = "";
    return;
  }

  if (this.confirmpin.length === 4) {
    return;
  }
  this.confirmpin += confirmpin;
}
showConfirmpin()
{
  console.log("hhd");
}
}
