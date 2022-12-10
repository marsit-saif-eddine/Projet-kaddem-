import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareServiceService } from 'app/services/share-service.service';
import { userAuthService } from 'app/services/user-auth.service ';
import '../../../assets/javascript/animation.js';
import { Login } from '../models/modelLogin/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginObject :Login = new Login;
  constructor(
    private userAuthService : userAuthService,
    private share: ShareServiceService,
    private router: Router
    ){

  }
  
  ngOnInit(): void{

  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(){
    
    this.share.login(this.loginObject).subscribe(
      (response:any) => {
        this.userAuthService.setRoles(response.user.role)
        this.userAuthService.setToken(response.jwtToken)

        const role = response.user.role[0].roleName
        this.userAuthService.setUser(response.user)

        if(role=='Admin'){
             this.router.navigate(['/admin']);
        }
        else {
          this.router.navigate(['/user']);
        }
      },
      (error)=>{console.log(error)}
      )
      
   
  }
  

}
