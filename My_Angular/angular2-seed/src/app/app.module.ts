import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy,CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import {ManagerComponent} from "./ManageUser/manager-user.component";
import {ManagerUserSearchComponent}from "./ManageUser/manager-user-search.component";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryPersonInfoService} from "./Service/in-memory-data.service";
import {PersonService} from "./Service/person.service";
import {ContainerTopComponent} from "./ContainerTop/container-top.component";
import {UserEditComponent} from "./ManageUser/user-edit.component";
import { ModalModule } from 'ngx-bootstrap';
import {AlertComponent} from "./Alert/alert.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageIndexComponent}from './PageIndex/page-index.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MatchListComponent} from './MatchList/match-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ManagerUserSearchComponent,
    ContainerTopComponent,
    UserEditComponent,
    AlertComponent,
    PageIndexComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig,{useHash:true}),
    CarouselModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryPersonInfoService),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    PersonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
