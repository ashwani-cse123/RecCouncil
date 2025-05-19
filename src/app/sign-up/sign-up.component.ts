import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { error } from 'console';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  constructor(private signUp:SignupService ){}

ngOnInit(): void {
    
}
  formsObj = {
   userName: '',
        userFirstName: '',
        userLastName: '',
        userPassword: '',
  };

  formsData(){
     this.signUp.saveUser(this.formsObj).subscribe((res:any)=>{
      alert("signUp succesfully!!")
      this.formsObj = {
        userName: '',
        userFirstName: '',
        userLastName: '',
        userPassword: '',
      };
     },(error)=>{
      if (error.status === 500) {
        // Assuming the backend sends the error message in `error.error.message`
        const errorMessage = error.error?.message || 'username is alredy exist try another usename';
       alert(errorMessage);
        
    }
     }
    )
  }
  reset(){
    this.formsObj = {
      userName: '',
      userFirstName: '',
      userLastName: '',
      userPassword: '',
    };
  }

}
