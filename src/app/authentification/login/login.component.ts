import { Component, OnInit } from '@angular/core';
import '../../../assets/javascript/animation.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email: string;
  password: string;

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(){
    console.log(`email: ${this.email} password: ${this.password}`)
    alert(`Email: ${this.email} Password: ${this.password}`)
  }
  

}
