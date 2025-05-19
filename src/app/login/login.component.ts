import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';
import { APP_BASE_HREF } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginObj = {
    email: '',
    Password: '',
  };

  constructor(
    private loginServ: LoginService,
    private router: Router,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {}

  formSubmit() {
    if(this.loginObj.email === 'media@gmail.com' && this.loginObj.Password === '1234'){
      alert("you are successfully login!! for media");
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/admin/mediacontrolls').then(()=>{
        window.location.reload();
      })
    }else if(this.loginObj.email === 'technical@gmail.com' && this.loginObj.Password === '1234'){
       alert("you are successfully login!! for Technical");
       localStorage.setItem('isLoggedIn', 'true');
       this.router.navigateByUrl('/admin/technicalcontrolls').then(()=>{
        window.location.reload();
       });
    }
    else{
      alert("something went wrong plz try again!!");
    }
  }
}
