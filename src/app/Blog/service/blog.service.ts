import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {  
 

  readonly API_URL =  "http://localhost:8089/SpringMVC/Blog" ; 

  readonly ENDPOINT_GET_BLOG = "/listblog"
  readonly ENDPOINT_DELETE_BLOG = "/deleteblog/"
  readonly ENDPOINT_ADD_BLOG = "/addblog" ; 
  readonly ENDPOINT_UPDATE_BLOG ="/updateBlog/" ; 
  readonly ENDPOINT_GETBYID ="/list/"

 


  
  
  


  constructor(private httpClient: HttpClient) { }

  getBlog(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GET_BLOG) 
  }

  deleteBlog(id: number){
     return this.httpClient.delete(this.API_URL+this.ENDPOINT_DELETE_BLOG+id)
  }

  addBlog(c: any)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_BLOG,c)

  }

  updateBlog(id:any,c: any)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_UPDATE_BLOG+id,c) 
  }

  getbyId(id:any)
  {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GETBYID+id)
  }
}
