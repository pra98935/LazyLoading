import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';

const routes: Routes = [
  
  // {
  //   path: 'account',
  //   loadChildren: './account/account.module#AccountModule'
  // },
  
  // {
  //   path: 'user',
  //   loadChildren: './user/user.module#UserModule'
  // },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'code-verification',
    component: CodeVerificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
