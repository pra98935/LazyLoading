import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  UserDataComponent } from './user-data/user-data.component';

import {  UserDetailComponent } from '../global/user-detail/user-detail.component';
import {  UserListComponent } from '../global/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'userdata',
    component: UserDataComponent,

    children : [
      {path:'user-detail', component:UserDetailComponent},
      {path:'user-list', component:UserListComponent}
   ]

  }

  // {
  //   path:'userdata', component:UserDataComponent
  // },
  // {
  //   path:'user-detail', component:UserDetailComponent
  // },
  // {
  //   path:'user-list', component:UserListComponent
  // }
  // {
  //   path: 'global',
  //   loadChildren: '../global/global.module#GlobalModule'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
 