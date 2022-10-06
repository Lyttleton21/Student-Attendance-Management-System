import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AttendanceListComponent } from './admin/attendance-list/attendance-list.component';
import { OneStudentComponent } from './admin/student/one-student/one-student.component';
import { StudentComponent } from './admin/student/student.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CandeactivateService } from './service/candeactivate.service';
import { GuardAdminHomeService } from './service/guard-admin-home.service';
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
  },
  {
    path:'admin',
    title:'Admin',
    //canActivate:[GuardAdminHomeService],
    component:AdminHomeComponent
  },
  {
    path:'admin/sign-up',
    title:'Create Admin Account',
    canActivate:[GuardAdminHomeService],
    component:AdminSignupComponent
  },
  {
    path:'admin/login',
    title:'Login As Admin',
    component:AdminLoginComponent
  },
  {
    path:'admin/attendance_list',
    title: 'Student Attendance List',
    canActivate:[GuardAdminHomeService],
    component: AttendanceListComponent
  },
  {
    path:'admin/add_student',
    title:'Add a New Student',
    canActivate:[GuardAdminHomeService],
    component:AddStudentComponent
  },
  {
    path:'admin/all_student',
    title:'All-Student',
    canActivate:[GuardAdminHomeService],
    component:StudentComponent
  },
  {
    path:'admin/all_student/student/:id',
    title:'Student profile',
    component:OneStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
