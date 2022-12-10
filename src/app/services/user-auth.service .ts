import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userAuthService {
  searchText$ = new Subject<String>()
  requestHeader = new HttpHeaders({"No-Auth":"True"})
  
  
  constructor(private http:HttpClient) {
    }
 
 public setRoles(roles:[]){
  localStorage.setItem("roles",JSON.stringify(roles));
 }
 public gtRoles():[]{
  return JSON.parse(localStorage.getItem("roles"));
 }
 public setToken(jwtToken:string){
  localStorage.setItem("jwtToken",jwtToken);
 }
 public getToken():string{
  return localStorage.getItem("jwtToken");
 }
 public clear(){
  localStorage.clear();
 }
 public isLoggedIn(){
  return this.gtRoles() && this.getToken();
 }
 public setUser(user:[]){
  return localStorage.setItem("profile",JSON.stringify(user));
 }
 public getUser():[]{
  return JSON.parse(localStorage.getItem("profile"));
 }

   }

