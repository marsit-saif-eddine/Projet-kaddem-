import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { userAuthService } from './user-auth.service ';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  searchText$ = new Subject<String>()

  requestHeader = new HttpHeaders({"No-Auth":"True"})
  
  
  constructor(private http:HttpClient) {
    }
  


  login(logindata){
      return this.http.post('http://localhost:8089/SpringMVC/authenticate',logindata,{headers:this.requestHeader})
  }

  register(registerdata){
    return this.http.post('http://localhost:8089/Etudiant/addEtudiant',registerdata,{headers:this.requestHeader})
}

   }

