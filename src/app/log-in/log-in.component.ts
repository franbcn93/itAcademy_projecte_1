import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string = "";
  password: string = "";
  user!: Log;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.user = {email: this.email, password: this.password};
    if(this.email==="" || this.password===""){
      console.log("No puede estar vacio");
    }else{
      console.log(this.user);
    }
  }

  getLogin(){
    return this.user;
  }
  
}
interface Log{
  email: string;
  password: string;
}
