import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { userAuthService } from './user-auth.service ';
import { Etudiant } from 'app/authentification/models/model/Etudiant';

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

  register(e:Etudiant):Observable<object>{
    return this.http.post('http://localhost:8089/SpringMVC/Etudiant/addEtudiant',e,{headers:this.requestHeader})
}

   }

