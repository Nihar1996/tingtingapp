import { PinPage } from './../pin/pin';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {@Input() pagetitle: String = "Enter Otp";

otp:string= "";

@Output() change: EventEmitter<string> = new EventEmitter<string>();

constructor(public navCtrl: NavController) {}

emitEvent() {
  this.change.emit(this.otp);
  this.navCtrl.setRoot(PinPage, {}, {animate: true, direction: 'forward'});

}

handleInput(otp: string) {
  if (otp === "clear") {
    this.otp = "";
    return;
  }

  if (otp.length === 6) {
    return;
  }
  this.otp += otp;
}
showOtp()
{
  console.log("");
}
}

