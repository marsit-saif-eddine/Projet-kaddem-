import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrat } from 'app/Models/contrat'; 
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})

export class ContratService {  
 

  readonly API_URL =  "http://localhost:8089/SpringMVC/Contrat" ; 

  readonly ENDPOINT_GET_CONTRAT = "/GetContrat"
  readonly ENDPOINT_DELETE_CONTRAT = "/deleteContrat/"
  readonly ENDPOINT_ADD_CONTRAT = "/addContrat" ; 
  readonly ENDPOINT_UPDATE_CONTRAT ="/updateContrat/" ; 
  readonly ENDPOINT_GETBYID ="/list/"
  readonly ENDPOINT_EXPORTEXCEL="/exportContratExcel";

 


  
  
  


  constructor(private httpClient: HttpClient) { }

  getContrat(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GET_CONTRAT) 
  }

  getExport(): Observable<Blob>{
    return this.httpClient.get(this.API_URL+this.ENDPOINT_EXPORTEXCEL, { responseType: 'blob'})
  }

  

  deleteContrat(id: number){
     return this.httpClient.delete(this.API_URL+this.ENDPOINT_DELETE_CONTRAT+id)
  }

  addContrat(c: Contrat)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_CONTRAT,c)

  }

  updateContart(id:any,c: Contrat)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_UPDATE_CONTRAT+id,c) 
  }

  getbyId(id:any)
  {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GETBYID+id)
  }
}
