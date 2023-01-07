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
  templateUrl: './form-updateAffectation.component.html',
  styleUrls: ['./form-updateAffectation.component.css']
})
export class FormUpdateAffectationComponent implements OnInit {
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
  contrat: Contrat 
  selected: String;
  etudiant: any ;


  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private contartService:ContratService, private router:Router , private matdialog:MatDialog) {
    this.EtudiantList();
    
    
   }

  

  ngOnInit() {
    this.result=this.data ;
    
    
  }
  save()
  {
    console.log(this.etudiant.nomE) ;
    console.log(this.etudiant.prenomE) ;
    console.log(this.result);
   this.contartService.affectEtudiant(this.result.idContrat,this.etudiant.nomE,this.etudiant.prenomE).subscribe(
    () => window.location.reload()
   );
 
  }

  changeClient(value) {
    console.log(value);
    this.etudiant=value ;
  }


  EtudiantList():void{
    this.contartService.getEtudiant().subscribe(
      (data: any) => {
         this.dataArray = data;
      });
  }
  
 
  

}
