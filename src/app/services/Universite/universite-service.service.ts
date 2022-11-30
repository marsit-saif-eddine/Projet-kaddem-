import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {
  
    searchText$ = new Subject<String>()


  constructor(private http:HttpClient) { }
  getAllUniversites() {
    return this.http.get("http://localhost:8088/SpringMVC/UniversiteC/listUniversite");
  }
  deleteUniversiteById(id:any)
  { 
    return this.http.delete(`http://localhost:8088/SpringMVC/UniversiteC/deleteUniversite/`+id)
  }
  addUniversite(universite:any) {
    return this.http.post("http://localhost:8088/SpringMVC/UniversiteC/addUniversite",universite);
  }
}
