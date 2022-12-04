import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { userAuthService } from '../user-auth.service ';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {
  auth_token:String = this.service.getToken();

  searchText$ = new Subject<String>()
  private refreshRequired = new Subject<void>()

  get RefreshRequired() {
    return this.refreshRequired;
  }
  BaseURL = "http://localhost:8089/SpringMVC/ReclamationC/"
  LIST="listReclamation"
  ADD = "addReclamation"
  DELETE = "deleteReclamation/"
  UPDATE ="updateReclamation"

  constructor(private http: HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})
 
  getAllReclamation() {
    return this.http.get(this.BaseURL + this.LIST,{headers:this.requestHeader});
  }
  addReclamation(reclamation:any) {
    return this.http.post(this.BaseURL + this.ADD,reclamation,{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  deleteReclamation(id:any) {
    return this.http.delete(this.BaseURL+this.DELETE+id,{headers:this.requestHeader})
  }
  
  updateReclamation(reclamation: any) {
     return this.http.put(this.BaseURL + this.UPDATE,reclamation,{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }

  AddandAffectReclamationToStudent(idEtudiant: any, reclamation: any) {
    return this.http.put("http://localhost:8089/SpringMVC/ReclamationC/AddandAffectReclamationToStudent/"+idEtudiant,reclamation,{headers:this.requestHeader})
    
  }
  
}
