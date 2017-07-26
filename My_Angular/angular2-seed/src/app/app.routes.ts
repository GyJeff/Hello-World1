import { Routes } from '@angular/router';

import {ManagerUserSearchComponent} from './ManageUser/manager-user-search.component'

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ManagerUserSearchComponent },
  { path: 'contact', component: ManagerUserSearchComponent},
  { path:'data',component:ManagerUserSearchComponent},
  { path:'map',component:ManagerUserSearchComponent},
  {path:'managerUser',component:ManagerUserSearchComponent },
  {path:'preference',component:ManagerUserSearchComponent},
];

