import {Component, EventEmitter, Input, OnInit, Output,} from "@angular/core";
import {PersonService} from "../Service/person.service";
import {PersonInfo} from "../Model/PersonInfo";

@Component({
  selector:'user-detail',
  templateUrl:'./manager-user.component.html',
  styleUrls:['./manager-user.component.css']
})
export class  ManagerComponent{
  constructor(private personService:PersonService){}
  @Input() personInfoes:PersonInfo[] = [];
  @Output() showEmitForm = new EventEmitter<PersonInfo>();
  @Output() deletePersonEmit = new EventEmitter<PersonInfo>();
}
