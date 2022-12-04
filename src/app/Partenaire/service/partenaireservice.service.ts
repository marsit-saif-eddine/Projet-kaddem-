import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Partenaire } from '../partenaire';
import { Observable } from 'rxjs';
import { userAuthService } from 'app/services/user-auth.service ';

@Injectable({
  providedIn: 'root'
})
export class PartenaireserviceService {
  auth_token:String = this.service.getToken();


  constructor(private http:HttpClient,private fb:FormBuilder, private service : userAuthService) {}
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})

  formModel = this.fb.group({
    idPart: [''],
    nomPart: [''],
    datedc: [''],
    emailPart: [''],
    datefc: [''],
    
  });
  

FindAll()
{
  return this.http.get('http://localhost:8089/SpringMVC/Partenaire/Getliste',{headers:this.requestHeader})
}
Ajouter_Partenaire(Partenaire:Partenaire): Observable <Object>
{
  return this.http.post('http://localhost:8089/SpringMVC/Partenaire/addPartenaire',Partenaire,{headers:this.requestHeader})
}
updatePartenaire(idPart,partenaire:Partenaire)
{
  console.log(partenaire)
  console.log(idPart)


  return this.http.put('http://localhost:8089/SpringMVC/Partenaire/updatePartenaire/'+idPart,partenaire,{headers:this.requestHeader})
}
removePartenaire(idPart:any)
{
  return this.http.delete('http://localhost:8089/SpringMVC/Partenaire/deletePart/'+idPart,{headers:this.requestHeader})
}
findPartenaireById(idPart:any)
{
  return this.http.get('http://localhost:8089/SpringMVC/Partenaire/findbyIdPartenaire/'+idPart,{headers:this.requestHeader})
}
}

