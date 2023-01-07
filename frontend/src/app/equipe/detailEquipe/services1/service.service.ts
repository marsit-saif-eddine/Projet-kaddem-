import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {detailEquipe} from '../model/detailEquipe';
import { Subject } from 'rxjs';
import { ɵassignExtraOptionsToRouter } from '@angular/router';
import { userAuthService } from 'app/services/user-auth.service ';


@Injectable({
  providedIn: 'root'
})
export class ServiceService1 {
  searchText$ = new Subject<String>();
  auth_token:String = this.service.getToken();
  private URL1=' http://localhost:8089/SpringMVC/Equipe';
  private URL2='http://localhost:8089/SpringMVC/Details';

  constructor(private httpclient:HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})
  
  createdetail(detail:detailEquipe):Observable<object>{ 
    return this.httpclient.post(this.URL2+'/addDetails',detail,{headers:this.requestHeader});
  }


  updatedetail(detail:detailEquipe, id : number):Observable<object>{
    return this.httpclient.put(this.URL2+'/updateDetails/'+id,detail,{headers:this.requestHeader})
  }
  deletedetail(id:number):Observable<object>{
    return this.httpclient.delete(this.URL2+'/deleteDetails/'+id,{headers:this.requestHeader})
    
  }

  getdetail(idequipe:number){
    return this.httpclient.get(this.URL1+'/retrieveDetail/'+idequipe,{headers:this.requestHeader})
  }

  getdetailbyid(iddetail:number){
    return this.httpclient.get(this.URL2+'/DetailEquipeById'+iddetail,{headers:this.requestHeader})
  }

  getdetails(){
    return this.httpclient.get(this.URL2+'/GetDetails',{headers:this.requestHeader})
  }

  affecter(idequipe:number, iddetail:number,de:any){
    return this.httpclient.put(this.URL2+'/affecterequipetodetail/'+idequipe+'/'+iddetail,de,{headers:this.requestHeader})
    
  }
  getdetailparequipe(id:number){
    return this.httpclient.get(this.URL1+'/retrieveDetail/'+id,{headers:this.requestHeader})
  }
  


  
 
}
