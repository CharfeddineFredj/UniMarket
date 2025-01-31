import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root',
})
export class UserdataService {

  userdata: any;
  private API_URL = environment.API_URL;


  tokenVal = localStorage.getItem('token');
  header = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenVal}`,
  });

  constructor(private httpRequest: HttpClient) { }
  //API_URL = 'http://127.0.0.1:8000/';





  getDataFormApi(data:any) {
    this.tokenVal = localStorage.getItem('token');
    this.header = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenVal}`,
    });

    return this.httpRequest.post(this.API_URL + 'student' , data , {
      headers: this.header
    });
  }

  addStudent(data:any) {
    return this.httpRequest.post(this.API_URL+'addstudent' , data);
   }
  deleteData(id:number) {
    return this.httpRequest.delete(this.API_URL+'deletestudent/'+id, {
    headers: this.header
   });
  }
   getOneStudent(id: any) {
    return this.httpRequest.get(this.API_URL + 'getOneStudent/'+id,{
      headers: this.header
      });

  }
  updateStudent(id: any, data: any) {
    return this.httpRequest.patch(this.API_URL + 'updateStudent/' + id, data, {
      headers: this.header
    });
  }
  registerUser(data: any) {
    return this.httpRequest.post(this.API_URL + 'register', data);
  }
  loginUser(data: any) {
    return this.httpRequest.post(this.API_URL + 'login', data);
  }

  logoutUser(token:any) {
    return this.httpRequest.get(this.API_URL + 'logout/' + token, {
      headers: this.header
    });
  }


}
