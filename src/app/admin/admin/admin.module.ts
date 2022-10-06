import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { MainComponent } from '../admin-home/main/main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdminSignupComponent } from '../admin-signup/admin-signup.component';
import { StudentComponent } from '../student/student.component';
import { AdminNavComponent } from '../admin-home/admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AttendanceListComponent } from '../attendance-list/attendance-list.component';
import { AdminFilterComponent } from '../attendance-list/filter/filter.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { OneStudentComponent } from '../student/one-student/one-student.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
    AdminHomeComponent,
    MainComponent,
    NavbarComponent,
    AdminSignupComponent,
    StudentComponent,
    AdminNavComponent,
    AdminLoginComponent,
    AttendanceListComponent,
    AdminFilterComponent,
    AddStudentComponent,
    OneStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ]
})
export class AdminModule { }
