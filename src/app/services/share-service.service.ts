import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  
  searchText$ = new Subject<String>()
  
  constructor(private http:HttpClient) {
    }
  getallusers()
  {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  adduser(post:any)
  {
    
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post)
  }
  deletepostById(id:any)
  {
    
    return this.http.delete(`https://api.instantwebtools.net/v1/passenger/`+id)
  }
  ModifyById(id:any,post:any)
  {
    
    return this.http.put(`https://api.instantwebtools.net/v1/passenger/`+id,post)
  }
  getoneetudiant(id:any){

    return this.http.get(`https://jsonplaceholder.typicode.com/posts/`+id)
  }

   }

