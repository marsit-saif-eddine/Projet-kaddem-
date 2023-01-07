import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  reloadDepartmentsList = new BehaviorSubject(false);
  reloadPartenairesList = new BehaviorSubject(false);



  constructor() { }
}
