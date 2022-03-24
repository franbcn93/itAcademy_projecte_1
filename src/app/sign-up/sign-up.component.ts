import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor() {
    
   }

  ngOnInit(): void {
  }

  register() {
    // console.log(this.login.getLogin());
    console.log(this.email);
    console.log(this.password);
  }

}
