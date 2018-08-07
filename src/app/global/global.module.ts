import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalRoutingModule
  ],
  declarations: [TopbarComponent, UserListComponent, UserDetailComponent, HomeComponent]
})
export class GlobalModule { }
