import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedServiceService } from 'app/services/shared-service.service';
import { Subscription } from 'rxjs';
import { PartenaireserviceService } from '../service/partenaireservice.service';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './updatePartenaire.component.html',
  styleUrls: ['./updatePartenaire.component.css']
})
export class updatePartenaireComponent implements OnInit {
  
  partenaire;
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , public service:PartenaireserviceService,private ss:SharedServiceService, private dialog:MatDialogRef<updatePartenaireComponent>  ) {
    
    
   
   }
   Reactiveform=new FormGroup({
    nomPart:new FormControl(this.data.nomPart,Validators.required),
    emailPart:new FormControl(this.data.emailPart,Validators.required),
    datedc:new FormControl(this.data.datedc,Validators.required),
    datefc:new FormControl(this.data.datefc,Validators.required),


})
   putpassenger(){
    
      this.dataob=this.service.updatePartenaire(this.result,this.Reactiveform.value).subscribe(data=>{
        this.ss.reloadPartenairesList.next(true)
        this.dialog.close()
      })

    
   }

  ngOnInit() {
  
    console.log(this.data)
    this.result=this.data.idPart
  
    
  }
  
 
  

}
