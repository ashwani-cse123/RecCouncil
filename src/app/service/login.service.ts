import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // public login(loginObj:any){
  //   return this.http.post(`${baseUrl}/login`,loginObj, {responseType:"text"});
  // }
  public login(loginObj:any) {
    return this.http.post(`${baseUrl}/login`,loginObj );
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr== '' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }
  public getUserRole(){
    let role = localStorage.getItem("role");
    if(role==undefined || role== '' || role==null){
      return "error";
    }else{
      return role;
    }
  }

}
