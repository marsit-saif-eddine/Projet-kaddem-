import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { userAuthService } from 'app/services/user-auth.service ';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {  
  auth_token:String = this.service.getToken();


  readonly API_URL =  "http://localhost:8089/SpringMVC/Blog" ; 
  host :string = "http://localhost:8089";
  

  readonly ENDPOINT_GET_BLOG = "/listblog"
  readonly ENDPOINT_DELETE_BLOG = "/deleteblog/"
  readonly ENDPOINT_ADD_BLOG = "/addblog" ; 
  readonly ENDPOINT_UPDATE_BLOG ="/updateBlog/" ; 
  readonly ENDPOINT_GETBYID ="/list/"
  


  constructor(private httpClient: HttpClient, private service : userAuthService) { }
  requestHeader = new HttpHeaders({'Authorization': `Bearer ${this.auth_token}`})
  getBlog(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GET_BLOG,{headers:this.requestHeader}) 
  }

  deleteBlog(id: number){
     return this.httpClient.delete(this.API_URL+this.ENDPOINT_DELETE_BLOG+id,{headers:this.requestHeader})
  }

  addBlog(c: any)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_BLOG,c,{headers:this.requestHeader})

  }
 

  updateBlog(id:any,c: any)
  {
    return this.httpClient.put(this.API_URL+this.ENDPOINT_UPDATE_BLOG+id,c,{headers:this.requestHeader}) 
  }

  getbyId(id:any)
  {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_GETBYID+id,{headers:this.requestHeader})
  }

  addwithuplod(c: any)
  {
    return this.httpClient.post(this.API_URL+this.ENDPOINT_ADD_BLOG,c,{ observe: 'response',headers:this.requestHeader })
  }

  // getphoto(id:any){
  //   return this.httpClient.get(this.host+'/SpringMVC/Blog/Imgarticles/'+id,{headers:this.requestHeader })
  // }
}
