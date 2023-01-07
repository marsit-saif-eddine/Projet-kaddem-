import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipe } from '../model/equipe';
import { Subject } from 'rxjs';
import { userAuthService } from 'app/services/user-auth.service ';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  searchText$ = new Subject<String>();
  auth_token:String = this.service.getToken();
  private URL=' http://localhost:8089/SpringMVC/Equipe';

  constructor(private httpclient:HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})
 
  
  getEquipes() {
    return this.httpclient.get(this.URL+'/GetEquipe',{headers:this.requestHeader});
  }

  createEquipe(equipe:Equipe):Observable<object>{ 
    return this.httpclient.post(this.URL+'/addEquipe',equipe,{headers:this.requestHeader});
  }


  getEquipebyid(id:number){
    return this.httpclient.get<Equipe>(this.URL+'/retrieve-equipe/'+id,{headers:this.requestHeader})
  }

  updateEquipe( id:number,equipe:Equipe):Observable<object>{
    return this.httpclient.put(this.URL+'/updateEquipe/'+id,equipe,{headers:this.requestHeader})
  }

  deleteEquipe(id:number){
    return this.httpclient.delete(this.URL+'/deleteEquipe/'+id,{headers:this.requestHeader})
    
  }
  getdetailby(id:number){
    return this.httpclient.get(this.URL+'/retrieveDetail/'+id,{headers:this.requestHeader})
  }
 
}
