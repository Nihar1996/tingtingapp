import { Input, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OtpPage } from '../otp/otp';


@IonicPage()
@Component({
  selector: 'page-phonenumber',
  templateUrl: 'phonenumber.html',
})
export class PhonenumberPage {@Input() pagetitle: String = "Enter Phone";

phone:string= "";

@Output() change: EventEmitter<string> = new EventEmitter<string>();

constructor(public navCtrl: NavController) {}

emitEvent() {
  this.change.emit(this.phone);
  this.navCtrl.setRoot(OtpPage, {}, {animate: true, direction: 'forward'});
}

handleInput(phone: string) {
  if (phone === "clear") {
    this.phone = "";
    return;
  }

  if (this.phone.length === 10) {
    return;
  }
  this.phone += phone;
}
showPhone()
{
  console.log("");
}


}
