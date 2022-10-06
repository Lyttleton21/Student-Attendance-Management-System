import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myConfigs } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  createAdmin(data:any):Observable<any>{
    return this.http.post(myConfigs.apiURL+'/create_admin',data);
  }

  login(data:any):Observable<any>{
    return this.http.post(myConfigs.apiURL+'/api/admin/login', data);
  }

  getAllAttendance():Observable<any>{
    return this.http.get(myConfigs.apiURL+'/api/attendance_list');
  }

  createAccountForStudent(data:any):Observable<any>{
    return this.http.post(myConfigs.apiURL+'/create_student', data)
  }

  getAllStudent(): Observable<any>{
    return this.http.get(myConfigs.apiURL+'/api/all_student')
  }

  getOneStudent(data:any):Observable<any>{
    //console.log(data);
    return this.http.post(myConfigs.apiURL+'/api/one_student/', data)
  }

}
