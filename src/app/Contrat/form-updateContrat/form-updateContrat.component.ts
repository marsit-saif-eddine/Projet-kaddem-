import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat } from 'app/Models/contrat';
import { ContratService } from 'app/contrat/service/contrat.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-updateContrat.component.html',
  styleUrls: ['./form-updateContrat.component.css']
})
export class FormUpdateContratComponent implements OnInit {
  g={
    "name": "John Doe",
    "trips": 500,
    "airline": 8
}  

  //Reactiveform: FormGroup ;
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  selected = 'IA'
  selected1 = false
  contrat: Contrat 
 


  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private contartService:ContratService, private router:Router , private matdialog:MatDialog) {
    
    
    
   }

    Reactiveform = new FormGroup({
    idContrat: new FormControl(""),
    dateDebutContrat: new FormControl("",Validators.required),
    dateFinContrat: new FormControl("",Validators.required),
    montantContrat: new FormControl("",Validators.required),
    archive: new FormControl("",Validators.required),
    spec: new FormControl("",Validators.required),
    etud: new FormControl(),



  })
 
   
  onSubmit()
  {
  this.contartService.updateContart(this.Reactiveform.value.idContrat,this.Reactiveform.value).subscribe(
  () => window.location.reload()
    )
  }
  

  ngOnInit() {
    this.result=this.data 
    this.Reactiveform.setValue ({
      idContrat: this.result.idContrat,
      dateDebutContrat:this.result.dateDebutContrat,
      dateFinContrat:this.result.dateFinContrat,
      montantContrat:this.result.montantContrat,
      archive:this.result.archive,
      spec:this.result.spec,
      etud:this.result.etud,
      
    })

    
  }
  
 
  

}
