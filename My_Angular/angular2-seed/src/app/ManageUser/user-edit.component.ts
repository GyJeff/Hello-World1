import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ModalDirective} from 'ngx-bootstrap'
import {PersonInfo} from "../Model/PersonInfo";

@Component({
  selector:'user-edit',
  templateUrl:'./user-edit.component.html',
  styleUrls:['./user-edit.component.css']
})
export class UserEditComponent {
  @Input() personInfo:PersonInfo = new PersonInfo();
  @Output() createPersonEmit = new EventEmitter<PersonInfo>();
  @ViewChild('childModal') public childModal:ModalDirective;

  createPerson(personInfo:PersonInfo):void {
    this.createPersonEmit.emit(personInfo);
  }
  showUserEditForm():void {
    this.childModal.show();
  }
  hideUserEditForm():void {
    this.childModal.hide();
  }
}
