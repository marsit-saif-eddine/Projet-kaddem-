import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  g={
    "name": "John Doe",
    "trips": 500,
    "airline": 8
}
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private share:ShareServiceService) {
    
    
   
   }
   Reactiveform=new FormGroup({
    nom:new FormControl("",Validators.required)
})
   putpassenger(id){
    console.log(this.g)
    if(this.Reactiveform.valid){
      this.dataob=this.share.ModifyById(id,this.g).subscribe(data=>{console.log(data)})
    }
   
    
   }

  ngOnInit() {
    this.result=this.data
    this.Reactiveform.setValue({
      nom:this.result.id,
      
    })
    
  }
  
 
  

}
