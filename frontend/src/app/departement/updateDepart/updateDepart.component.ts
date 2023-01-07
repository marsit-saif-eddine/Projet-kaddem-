import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareServiceService } from 'app/services/share-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartServiceService } from '../service/depart-service.service';
import { Departement } from '../departement';
import { SharedServiceService } from 'app/services/shared-service.service';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './updateDepart.component.html',
  styleUrls: ['./updateDepart.component.css']
})
export class updateDepartComponent implements OnInit {
  id:any
  
  departement;
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private router:Router,public dialog:MatDialog ,
   public depart:DepartServiceService,private acr:ActivatedRoute,private ss:SharedServiceService) {
    
    
   
   }
   Reactiveform=new FormGroup({
    idDepart: new FormControl(""),
    nomDepart: new FormControl(this.data.nomDepart,Validators.required),
    numDepart: new FormControl(this.data.numDepart,Validators.required),
    emailDepart: new FormControl(this.data.emailDepart,Validators.required),
    adresse: new FormControl(this.data.adresse,Validators.required),
    codepostal: new FormControl(this.data.codepostal,Validators.required),

})
onSubmit()
{
  console.log(this.Reactiveform.value)
this.depart.updateDepartement(this.Reactiveform.value,this.result).subscribe(data=>{this.dialog.closeAll() 
  this.ss.reloadDepartmentsList.next(true)
} )
}
ngOnInit() {
  console.log(this.data)
  console.log('hi error')
  this.result=this.data.idDepart
  this.Reactiveform.setValue ({
    idDepart: this.result.idDepart,
    nomDepart:this.result.nomDepart,
    numDepart:this.result.numDepart,
    emailDepart:this.result.emailDepart,
    adresse:this.result.adresse,
    codepostal:this.result.codepostal,
    
  })
 
  
 
}}
