import { Component, Inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {
  formRec = new FormGroup({
    idReclamation:new FormControl(''),
    objet:new FormControl('',[Validators.required,Validators.minLength(4)]),
    description:new FormControl('',[Validators.required,,Validators.minLength(10)]),
  });


  get objet(){
    return this.formRec.get('objet')
  }

   get description(){
    return this.formRec.get('description')
   }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private reclamationService: ReclamationServiceService
    ,  private acr: ActivatedRoute,private router:Router , private matdialog: MatDialog) { }

  ngOnInit(): void {
    this.formRec.get("idReclamation").setValue(this.data.idReclamation)
    this.objet.setValue(this.data.objet)
    this.description.setValue(this.data.description)
  }
  ClosePopup(){
    this.matdialog.closeAll()
  }
  
  updateReclamation(reclamation: any) {
    
    this.data = this.reclamationService.updateReclamation(reclamation , 2).subscribe(
      data => {
        console.log(data)
      })
    this.ClosePopup();
  }

}
