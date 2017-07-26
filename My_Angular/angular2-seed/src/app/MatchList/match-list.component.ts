import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
  selector:'match-list',
  template:`
    <div *ngIf="displayList.length>0" class="match-container">
      <ul class="dropdown-menu" role="menu"  [style.width]="width+'px'" [style.left]="left+'px'">
        <li  role="menuitem" *ngFor="let displayStr of displayList" (click)="DropDownClickEmit.emit(displayStr)"><a class="dropdown-item">{{displayStr}}</a></li>
      </ul>
    </div>
  `,
  styleUrls:['./match-list.component.css']
})
export class MatchListComponent{
  @Input() width:number;
  @Input() left:number;
  @Input() displayList:string[]= [];

  @Output() DropDownClickEmit = new EventEmitter<string>();
}
