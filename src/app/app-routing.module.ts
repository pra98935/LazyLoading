import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },

  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
