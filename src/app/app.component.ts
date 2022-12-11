import { Component} from '@angular/core';
import { userAuthService } from 'app/services/user-auth.service ';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private userAuthService : userAuthService,private router: Router , private location :Location){
   
    const log = this.userAuthService.isLoggedIn()
    if (!log && this.location.path()!="/register"){
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void{  

  }



}
