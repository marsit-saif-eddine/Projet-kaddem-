import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareServiceService } from 'app/services/share-service.service';
import { userAuthService } from 'app/services/user-auth.service ';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(
    private userAuthService : userAuthService,
    private share: ShareServiceService,
    private router: Router
    ){

  }
  
  ngOnInit(): void{
this.logout();
  }
 logout(){
  this.userAuthService.clear();
  window.location.reload();
 }
  

}
