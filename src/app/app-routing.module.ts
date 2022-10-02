import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CandeactivateService } from './service/candeactivate.service';
import { LoginDetailsService } from './service/login-details.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    title:'My-Project',
    component:HomeComponent
  },
  {
    path:'sign-up',
    title:'Create Student Account',
    canDeactivate:[CandeactivateService],
    component:SignUpComponent
  },
  {
    path:'login',
    title:'Login',
    component:LoginComponent
  },
  {
    path:'profile',
    title:'My-Profile',
    canActivate:[LoginDetailsService],
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
