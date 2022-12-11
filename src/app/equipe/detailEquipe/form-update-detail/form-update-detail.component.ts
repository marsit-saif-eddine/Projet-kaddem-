import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { ServiceService1 } from '../services1/service.service';
@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-update-detail.component.html',
  styleUrls: ['./form-update-detail.component.css']
})
export class  FormUpdatedetailComponent implements OnInit {
 
  result:any
  dataArray:any
  dataob:Subscription
  name:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private share:ShareServiceService , private service:ServiceService1 , private router:Router) {
    
    
   
   }
   Reactiveform=new FormGroup({
    
    idDetailEquipe:new FormControl("",Validators.required),
    salle:new FormControl(""),
    thematique:new FormControl("")

})
goTodetaillist(){
  this.router.navigate(['admin/listequipe'])
  .then(() => {
    window.location.reload();
  });
  
}
   putequipe(){
    console.log(this.Reactiveform.value);
    
  
    console.log(this.Reactiveform.value.idDetailEquipe);
    if(this.Reactiveform.valid){
      this.service.updatedetail( this.Reactiveform.value, this.Reactiveform.value.idDetailEquipe).subscribe(data=>{
        data =this.Reactiveform.value ;
        console.log(data);
        this.goTodetaillist(); 
      
    },
      (error)=> console.log(error));
      this.goTodetaillist(); 
    }
    this.goTodetaillist(); 

    this.router.navigate(['GestionPartenaires/DashboardPartenaire/GetPartenaires'])
    .then(() => {
      window.location.reload();
    });
   
    
   }

  ngOnInit() {
    this.result=this.data
    this.Reactiveform.setValue({
      idDetailEquipe:this.result.idDetailEquipe,
      salle:this.result.salle,
      thematique:this.result.thematique,
      
    })
    
  }
  
 
  

}
