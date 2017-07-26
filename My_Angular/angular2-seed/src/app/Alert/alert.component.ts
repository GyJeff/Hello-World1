import {Component, Input} from "@angular/core";
import {AlertStyle} from "./alert-style-storage";

@Component({
  selector:'alert',
  templateUrl:'./alert.component.html'
})
export class AlertComponent{
  @Input() alertMessage: {alterStyle:string,title:string,message:string};
}
