import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { userAuthService } from 'app/services/user-auth.service ';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardd implements CanActivate {
  datarole:any
  constructor(private service: userAuthService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.gtRoles()!=null ){
        
        this.datarole=this.service.gtRoles()
        if (this.datarole[0].roleName=="User"){
          return true;
        }
        else {this.router.navigate(['admin'])}
        
      }
      
    
    return false;
  }
      
  }

