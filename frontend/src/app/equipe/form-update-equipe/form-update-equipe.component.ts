import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { Equipe } from '../model/equipe';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-update-equipe.component.html',
  styleUrls: ['./form-update.component.css']
})
export class  FormUpdateequipeComponent implements OnInit {
 
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private share:ShareServiceService , private service:ServiceService 
  , private router:Router) {
    
    
   
   }
   Reactiveform=new FormGroup({
    
    
    nomEquipe:new FormControl("",[Validators.required,Validators.minLength(3)]),
    niveau:new FormControl("",Validators.required)

})
goToEquipelist(){
  this.router.navigate(['admin/listequipe'])
    .then(() => {
      window.location.reload();
    });
}
   putequipe(){
    console.log(this.data);
    
  
    console.log(this.Reactiveform.value.idEquipe);
    if(this.Reactiveform.valid){
      this.service.updateEquipe( this.data.idEquipe,this.Reactiveform.value).subscribe(data=>{
        data =this.Reactiveform.value ;
        console.log(data);
        this.goToEquipelist(); 
      
    },
      (error)=> console.log(error));
      //this.goToEquipelist(); 
    }
    this.goToEquipelist();
    
    
   
   
    
   }

  ngOnInit() {
    this.result=this.data
    this.Reactiveform.setValue({
      
      nomEquipe:this.result.nomEquipe,
      niveau:this.result.niveau,
      
    })
    
  }
  
 
  

}
