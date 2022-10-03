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
}
