import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { DepartServiceService } from '../service/depart-service.service';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './updateDepart.component.html',
  styleUrls: ['./updateDepart.component.css']
})
export class updateDepartComponent implements OnInit {
  
  departement;
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , public depart:DepartServiceService) {
    
    
   
   }
   Reactiveform=new FormGroup({
    nom:new FormControl("",Validators.required),

})
getbyId(){
  this.dataob=this.depart.findDepartementById(this.result).subscribe(data=>{
    this.departement=data;
    console.log(data)
  })
}
   putpassenger(){
    
      this.dataob=this.depart.updateDepartement(this.result).subscribe(data=>{console.log(data)})
    
   
    
   }

  ngOnInit() {
    this.getbyId();
    this.result=this.data.idDepart
    this.Reactiveform.setValue({
      nom:this.result.id,
      
    })
    
  }
  
 
  

}
