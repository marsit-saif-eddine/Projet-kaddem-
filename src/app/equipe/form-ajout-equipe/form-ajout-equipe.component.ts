import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';
import { Equipe } from '../model/equipe';
@Component({
  selector: 'app-Form-Ajout1',
  templateUrl: './form-ajout-equipe.component.html',
  styleUrls: ['./form-ajout-equipe.component.css']
})
export class FormAjoutequipeComponent implements OnInit {


 


  equipe!:Equipe
  dataArray:any
  dataob:Subscription
  constructor(private service:ServiceService, private router:Router) {
  
    
   
   }
   goToEquipelist(){
    this.router.navigate(['admin/listequipe']).then(() => {
      window.location.reload();
    });
  }
   get(equipe){
    
    console.log(equipe.value);
    this.dataob=this.service.createEquipe(equipe.value).subscribe(data=>{console.log(data);
      
      this.goToEquipelist();
      });
     
      
    this.goToEquipelist();
    
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }


 
 


}
