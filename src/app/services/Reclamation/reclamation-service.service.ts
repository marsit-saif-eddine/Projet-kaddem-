import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  searchText$ = new Subject<String>()
  private refreshRequired = new Subject<void>()

  get RefreshRequired() {
    return this.refreshRequired;
  }
  BaseURL = "http://localhost:8088/SpringMVC/ReclamationC/"
  LIST="listReclamation"
  ADD = "addReclamation"
  DELETE = "deleteReclamation/"
  UPDATE ="updateReclamation"

  constructor(private http: HttpClient) { }
  
  getAllReclamation() {
    return this.http.get(this.BaseURL + this.LIST);
  }
  addReclamation(reclamation:any) {
    return this.http.post(this.BaseURL + this.ADD,reclamation).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  deleteReclamation(id:any) {
    return this.http.delete(this.BaseURL+this.DELETE+id)
  }
  
  updateReclamation(reclamation: any) {
     return this.http.put(this.BaseURL + this.UPDATE,reclamation).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  AddandAffectReclamationToStudent(idEtudiant: any, reclamation: any) {
    return this.http.put("http://localhost:8088/SpringMVC/ReclamationC/AddandAffectReclamationToStudent/"+idEtudiant,reclamation)
    
  }
  
}
