import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { MainComponent } from '../admin-home/main/main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { AdminSignupComponent } from '../admin-signup/admin-signup.component';
import { StudentComponent } from '../student/student.component';
import { AdminNavComponent } from '../admin-home/admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminHomeComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    AdminSignupComponent,
    StudentComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
