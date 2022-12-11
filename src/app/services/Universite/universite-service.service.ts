import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { userAuthService } from '../user-auth.service ';


@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {
  auth_token:String = this.service.getToken();

  searchText$ = new Subject<String>()
  private refreshRequired = new Subject<void>()
  

  get RefreshRequired() {
    return this.refreshRequired;
  }


  constructor(private http:HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})

  getAllUniversites() {
    return this.http.get("http://localhost:8089/SpringMVC/UniversiteC/listUniversite",{headers:this.requestHeader})
  }
  deleteUniversiteById(id:any)
  { 
    return this.http.delete(`http://localhost:8089/SpringMVC/UniversiteC/deleteUniversite/`+id,{headers:this.requestHeader})
  }
  addUniversite(universite:any) {
    return this.http.post("http://localhost:8089/SpringMVC/UniversiteC/addUniversite", universite,{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }
  updateUniversite(universite: any) {
    return this.http.put("http://localhost:8089/SpringMVC/UniversiteC/updateUniversite",universite,{headers:this.requestHeader}).pipe(tap(() => {
      this.RefreshRequired.next();
    }));
  }
}
