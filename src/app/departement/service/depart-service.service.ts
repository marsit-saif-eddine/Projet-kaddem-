import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../departement';
import { FormBuilder } from '@angular/forms';
import { userAuthService } from 'app/services/user-auth.service ';

@Injectable({
  providedIn: 'root'
})
export class DepartServiceService {
  auth_token:String = this.service.getToken();

  constructor(private http:HttpClient,
    private fb: FormBuilder, private service : userAuthService) { }
    requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})

    formModel = this.fb.group({
        idDepart: [''],
        nomDepart: [''],
        numDepart: [''],
        emailDepart: [''],
        adresse: [''],
        codepostal: [''],
      });

  FindAll()
  {
      return this.http.get('http://localhost:8089/SpringMVC/Departement/GetDepartement',{headers:this.requestHeader})
  }
  Ajouter_Departement(departement:Departement): Observable <Object>
  {
      return this.http.post('http://localhost:8089/SpringMVC/Departement/addDepartement/',departement,{headers:this.requestHeader})
  }
  updateDepartement(departement:Departement,idDepart:any)
 {
  console.log(departement)
      return this.http.put('http://localhost:8089/SpringMVC/Departement/updateDepartement/'+idDepart,departement,{headers:this.requestHeader})
  }
  removeDepartement(idDepart:any)
  {
      return this.http.delete('http://localhost:8089/SpringMVC/Departement/deleteDepartement/'+idDepart,{headers:this.requestHeader})
  }
  findDepartementById(idDepart:any)
  {
      return this.http.get('http://localhost:8089/SpringMVC/Departement/findbyIdDepartement/'+idDepart,{headers:this.requestHeader})
  }
}
