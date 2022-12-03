import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {
  
  searchText$ = new Subject<String>()
  private refreshRequired = new Subject<void>()
  

  get RefreshRequired() {
    return this.refreshRequired;
  }


  constructor(private http:HttpClient) { }
  getAllUniversites() {
    return this.http.get("http://localhost:8088/SpringMVC/UniversiteC/listUniversite")
  }
  deleteUniversiteById(id:any)
  { 
    return this.http.delete(`http://localhost:8088/SpringMVC/UniversiteC/deleteUniversite/`+id)
  }
  addUniversite(universite:any) {
    return this.http.post("http://localhost:8088/SpringMVC/UniversiteC/addUniversite", universite).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }
  updateUniversite(universite: any) {
    return this.http.put("http://localhost:8088/SpringMVC/UniversiteC/updateUniversite",universite).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }
}
