import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrat } from 'app/Models/contrat'; 
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})

export class ContratService {  
  searchText$ = new Subject<String>() ;

  readonly API_URL =  "http://localhost:8088/SpringMVC/contractC" ; 

  readonly ENDPOINT_GET_CONTRAT = "/listC"
  readonly ENDPOINT_DELETE_CONTRAT = "/delete/"
  readonly ENDPOINT_ADD_CONTRAT = "/add" ; 
  readonly ENDPOINT_UPDATE_CONTRAT ="/update" ; 
  readonly ENDPOINT_GETBYID ="/list/"

 


  

  


  constructor(private httpClient: HttpClient) { }

  getContrat(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GET_CONTRAT) 
  }

  deleteContrat(id: number){
     return this.httpClient.delete(this.API_URL+this.ENDPOINT_DELETE_CONTRAT+id)
  }

  addContrat(c: Contrat)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_CONTRAT,c)

  }

  updateContart(c: Contrat)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_UPDATE_CONTRAT,c) 
  }

  getbyId(id:any)
  {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GETBYID+id)
  }
}
