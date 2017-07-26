import {Component, EventEmitter, Input, Output} from "@angular/core";
import {PageIndexInfo} from "../Model/PageIndexInfo";
@Component({
  selector:'page-index',
  template:`
    <div class="pagination-wrap">
      <ul class="pagination">
        <li *ngFor="let pageIndexInfo of pageIndexInfos" [class]="pageIndexInfo.isSelected?'active':''" (click)="selectIndexEmit.emit(pageIndexInfo.index)"><a>{{pageIndexInfo.index}}</a></li>
        <li>
          <a aria-label="Next">
            <span aria-hidden="true"><i class="fa fa-play"></i></span>
          </a>
        </li>
      </ul>
    </div>
  `
})
export class PageIndexComponent {
  @Input() pageIndexInfos:PageIndexInfo[] = [];
  @Output() selectIndexEmit = new EventEmitter<number>();
}
