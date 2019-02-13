import { IonicPage, NavController } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ConfirmpinPage } from '../confirmpin/confirmpin';

@IonicPage()
@Component({
  selector: "custom-pin",
  templateUrl: "pin.html"
})
export class PinPage {
  @Input() pagetitle: String = "Enter Pin";

  pin:string= "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor(public navCtrl: NavController) {}

  emitEvent() {
    this.change.emit(this.pin);
    this.navCtrl.setRoot(ConfirmpinPage, {}, {animate: true, direction: 'forward'});

  }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";
      return;
    }

    if (this.pin.length === 4) {
      return;
    }
    this.pin += pin;
  }
  showPin()
  {
    console.log("hhd");
  }
}