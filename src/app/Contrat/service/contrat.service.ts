import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Contrat } from 'app/Models/contrat'; 
import { Observable, Subject } from 'rxjs';
import { userAuthService } from 'app/services/user-auth.service ';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})

export class ContratService {  
 
  auth_token:String = this.service.getToken();

  readonly API_URL =  "http://localhost:8089/SpringMVC/Contrat" ; 
  readonly get_etudiant ="http://localhost:8089/SpringMVC/Etudiant/GetEtudiant";

  readonly ENDPOINT_GET_CONTRAT = "/GetContrat"
  readonly ENDPOINT_DELETE_CONTRAT = "/deleteContrat/"
  readonly ENDPOINT_ADD_CONTRAT = "/addContrat" ; 
  readonly ENDPOINT_UPDATE_CONTRAT ="/updateContrat/" ; 
  readonly ENDPOINT_GETBYID ="/list/"
  readonly ENDPOINT_AFFECTER="/affecter_contrat_etudiant/";
 

 


  
  
  


  constructor(private httpClient: HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})

  getContrat(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GET_CONTRAT,{headers:this.requestHeader}) 
  }



  

  deleteContrat(id: number){
     return this.httpClient.delete(this.API_URL+this.ENDPOINT_DELETE_CONTRAT+id,{headers:this.requestHeader})
  }

  addContrat(c: Contrat)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_CONTRAT,c,{headers:this.requestHeader})

  }

  updateContart(id:any,c: Contrat)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_UPDATE_CONTRAT+id,c,{headers:this.requestHeader}) 
  }

  getbyId(id:any)
  {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GETBYID+id,{headers:this.requestHeader})
  }
  getEtudiant()
  {
    return this.httpClient.get(this.get_etudiant,{headers:this.requestHeader});
  }

  affectEtudiant(id:any,nomE:any,prenomE:any)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_AFFECTER+id+"/"+nomE+"/"+prenomE,{},{headers:this.requestHeader})
  }
}
