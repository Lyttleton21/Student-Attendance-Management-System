import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myConfigs } from '../component/config/config';
import { Student } from '../component/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  createStudent(data:any):Observable<any>{
    return this.http.post(myConfigs.apiURL+'/create_student',data);
  }

  login(data:any):Observable<any>{
    return this.http.post(myConfigs.apiURL+'/api/login', data);
  }
}
