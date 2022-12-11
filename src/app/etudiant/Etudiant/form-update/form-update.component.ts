import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private share:ShareServiceService, private service:ServiceService, 
  private router:Router) {
    
    
   
   }
   Reactiveform=new FormGroup({
    idEtudiant:new FormControl("",Validators.required),
    opt:new FormControl("",Validators.required),
    d:new FormControl("",Validators.required),
    prenomE:new FormControl("",[Validators.required,Validators.minLength(3)]),
    nomE:new FormControl("",[Validators.required,Validators.minLength(3)])
})


    putetudiant(){
  console.log(this.Reactiveform.value);
  

  console.log(this.Reactiveform.value.idEquipe);
  if(this.Reactiveform.valid){
    this.service.updateEtudiant( this.result.idEtudiant,this.Reactiveform.value).subscribe(data=>{
      data =this.Reactiveform.value ;
      console.log(data);
      
    
  },
    (error)=> console.log(error));
  
  }
  
  this.router.navigate(['admin/table-list'])  
    .then(() => {
      window.location.reload();
    });
  
 }


  ngOnInit() {
      this.result=this.data
      this.Reactiveform.setValue({
      idEtudiant:this.result.idEtudiant,
      opt:this.result.opt,
      d:this.result.d,
      prenomE:this.result.prenomE,
      nomE:this.data.nomE

      
    })
    
  }


    
  }
  
 
  


