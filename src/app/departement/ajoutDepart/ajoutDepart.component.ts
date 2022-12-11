import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Departement } from '../departement';
import { DepartServiceService } from '../service/depart-service.service';
import { SharedServiceService } from 'app/services/shared-service.service';
@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './ajoutDepart.component.html',
  styleUrls: ['./ajoutDepart.component.css']
})
export class ajoutDepartComponent implements OnInit {
  department!:Departement

  dataArray:any
  dataob:Subscription
  constructor(private depart:DepartServiceService,private router:Router, private ss:SharedServiceService) {
  
    
   
   }
   goToDepartlist(){
    this.router.navigate(['admin/listeDepart'])
  }
   get(departement){
    console.log(departement.value);
    this.dataob=this.depart.Ajouter_Departement(departement.value).subscribe(data=>{
      this.ss.reloadDepartmentsList.next(true)
      this.goToDepartlist();
    });
    
    
    
    
    
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
