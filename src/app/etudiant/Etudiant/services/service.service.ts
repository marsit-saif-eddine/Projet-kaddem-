import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Subject , tap } from 'rxjs';
import { Etudiant } from '../model/Etudiant';
import { userAuthService } from 'app/services/user-auth.service ';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  auth_token:String = this.service.getToken();
  searchText$ = new Subject<String>();
  private refreshRequired = new Subject<void>()

  get RefreshRequired() {
    return this.refreshRequired;
  }
  private URL=' http://localhost:8089/SpringMVC/Etudiant';

  constructor(private httpclient:HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})
  requestHeaderr = new HttpHeaders({"No-Auth":"True"})
  getEtudiants() {
    return this.httpclient.get(this.URL+'/GetEtudiant',{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  createEtudiant(e:Etudiant):Observable<object>{ 
    return this.httpclient.post(this.URL+'/addEtudiant',e,{headers:this.requestHeaderr});
  }


 /* getEquipebyid(id:number){
    return this.httpclient.get<Equipe>(this.URL+'/retrieve-equipe/'+id)
  }*/

  updateEtudiant( id:String,e:Etudiant):Observable<object>{
    return this.httpclient.put(this.URL+'/updateEtudiant/'+id,e,{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  deleteEtudiant(id:String):Observable<object>{
    return this.httpclient.delete(this.URL+'/deleteEtudiant/'+id,{headers:this.requestHeader})
  }
  getEtudiantbyid(id:String){
    return this.httpclient.get<Etudiant>(this.URL+'/retrieve-etudiant/'+id,{headers:this.requestHeader})
  }
 
 
}
