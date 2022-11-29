import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat } from 'app/Models/contrat';
import { ContratService } from 'app/services/contrat.service';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
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
  contrat: Contrat = new Contrat; 


  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private contartService:ContratService) {
    
    
    
   }

    Reactiveform = new FormGroup({
    datedeb: new FormControl("",Validators.required),
    datefin: new FormControl("",Validators.required),
    montant: new FormControl("",Validators.required),
    archive: new FormControl("",Validators.required),
    specialite: new FormControl("",Validators.required),



  })
 
   

   putpassenger(id){
    console.log(id)
    if(this.Reactiveform.valid){
      this.dataob=this.contartService.updateContart(id).subscribe(data=>{console.log(data)})
    }
   
    
   }

  

  ngOnInit() {
    this.result=this.data 
    this.Reactiveform.setValue ({
      datedeb:this.result.dateDebutContrat,
      datefin:this.result.dateFinContrat,
      montant:this.result.montantContrat,
      archive:this.result.archive,
      specialite:this.result.spec,


      
    })

    
  }
  
 
  

}
