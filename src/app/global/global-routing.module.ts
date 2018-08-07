import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  UserListComponent } from './user-list/user-list.component';
import {  UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
    // { path:"", redirectTo:"user-list", pathMatch:"full" },
    // { path:"user-list", component:UserListComponent },
    // { path:"user-detail", component:UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
