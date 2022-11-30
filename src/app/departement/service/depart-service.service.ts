import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../departement';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DepartServiceService {


  constructor(private http:HttpClient,
    private fb: FormBuilder,) { }

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
      return this.http.get('http://localhost:8086/Departement/departlist')
  }
  Ajouter_Departement(departement:Departement): Observable <Object>
  {
      return this.http.post('http://localhost:8086/Departement/addDepart',departement)
  }
  updateDepartement(id)
  {
    var body = {
        idDepart: id,
        nomDepart:this.formModel.value.nomDepart,    
        numDepart:this.formModel.value.numDepart,
        emailDepart:this.formModel.value.emailDepart,
        adresse:this.formModel.value.adresse,
        codepostal:this.formModel.value.codepostal,

      
      };
      return this.http.put('http://localhost:8086/Departement/updateDepart',body)
  }
  removeDepartement(idDepart:any)
  {
      return this.http.delete('http://localhost:8086/Departement/removeDepartement/'+idDepart)
  }
  findDepartementById(idDepart:any)
  {
      return this.http.get('http://localhost:8086/Departement/findbyIdDepartement/'+idDepart)
  }
}
