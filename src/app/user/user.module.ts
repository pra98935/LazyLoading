import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDataComponent } from './user-data/user-data.component';

import {  UserDetailComponent } from '../global/user-detail/user-detail.component';
import {  UserListComponent } from '../global/user-list/user-list.component';

import {  TopbarComponent } from '../global/topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserDataComponent, UserDetailComponent, UserListComponent, TopbarComponent]
})
export class UserModule { }
