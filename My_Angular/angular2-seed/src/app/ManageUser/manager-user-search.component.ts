import {Component, OnInit, ViewChild} from "@angular/core";
import {PersonInfo} from "../Model/PersonInfo";
import {PersonService} from "../Service/person.service";
import {ManagerComponent} from "./manager-user.component";
import {UserEditComponent}from './user-edit.component';
import {trigger,state,style,animate,transition}from'@angular/animations'
import {AlertStyle, AlertStyleMap} from "../Alert/alert-style-storage";
import {PageIndexInfo} from "../Model/PageIndexInfo";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

@Component({
  selector:'manageruser-search',
  templateUrl:'./manager-user-search.component.html',
  styleUrls:['./manager-user-search.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translate(0,0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class  ManagerUserSearchComponent implements OnInit
{
  constructor(private personService:PersonService){}
  @ViewChild(ManagerComponent) userDetailComponent:ManagerComponent;
  @ViewChild(UserEditComponent) userEditComponent:UserEditComponent;
  alertMessage:{alertStyle:string,title:string,message:string};
  pageIndexInfos:PageIndexInfo[] = [{index:1,isSelected:true},{index:2,isSelected:false}];
  nameList:string[] = [];
  nameControl = new FormControl();
  isAlert:boolean = false;
  name:string;
  matchedName:string;
  sex:string;
  age:string;

  ngOnInit(){
    this.GetPersonInfoes();

    this.nameControl.valueChanges
      .debounceTime(500)
      .filter(value=>value!=null && value!='' && value!=this.matchedName)
      .distinctUntilChanged()
      .switchMap(value=>this.personService.GetPersonNames(value))
      .subscribe(names=>this.nameList = names);
  }

  MatchedName(name:string) {
    this.matchedName = this.name = name;
    this.nameList = [];
  }

  ShowAlert(alertStyle:AlertStyle,title:string,message:string) {
      this.alertMessage = {alertStyle:'alert-success',title:title,message:message};
      this.isAlert = true;
      setTimeout(()=>{
        if(this.isAlert) {
          this.isAlert = false;
        }
      },2000)
  }

  GetPersonInfoes(pageIndex:number = 1):void{
    this.personService.GetPersonInfoes().then(personInfoes =>{

      this.pageIndexInfos.forEach(pageindexinfo=>{
        pageindexinfo.isSelected = pageindexinfo.index == pageIndex?true:false;
      })

      if(this.name!=null && this.name!='') {
        personInfoes = personInfoes.filter(per=>per.name.indexOf(this.name)>-1);
      }

      if(this.sex!=null && this.sex!='') {
        personInfoes = personInfoes.filter(per=>per.sex == this.sex);
      }

      if(this.age!=null && this.age!='') {
        personInfoes = personInfoes.filter(per=>per.age.toString()==this.age);
      }

      personInfoes = personInfoes.slice(10*(pageIndex-1),10*pageIndex);
      this.userDetailComponent.personInfoes = personInfoes}).catch();
  }

  ShowUserEditForm(personinfo:PersonInfo = new PersonInfo()):void{
    this.userEditComponent.personInfo = personinfo;
    this.userEditComponent.showUserEditForm();
  }

  DeletePerson(personinfo:PersonInfo):void{
    this.personService.delete(personinfo.id)
      .then(()=>{
        this.userDetailComponent.personInfoes = this.userDetailComponent.personInfoes.filter(p=>p!=personinfo);
        this.ShowAlert(AlertStyle.Success,"Success!","Delete successful");
      })
  }

  EditPersonInfo(personInfo:PersonInfo):void{
    if(personInfo.id==null) {
      this.personService.create(personInfo)
        .then(personInfo => {
          this.userDetailComponent.personInfoes.push(personInfo);
          this.userEditComponent.hideUserEditForm();
          this.ShowAlert(AlertStyle.Success,"Success!","Create successful");
        })
        .catch();
    }
    else {
      this.personService.Update(personInfo)
        .then(()=>{
        this.userEditComponent.hideUserEditForm();
        this.ShowAlert(AlertStyle.Success,"Success!","Save successful");
      }).catch();
    }
  }
}
