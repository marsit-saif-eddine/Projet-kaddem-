import { Component, OnInit } from '@angular/core';
import { Contrat } from 'app/Models/contrat';
import { ContratService } from 'app/services/contrat.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutContratComponent implements OnInit {
  f:Contrat
  dataArray:  Contrat[] = [];
  dataob:Subscription
  contrat: Contrat = new Contrat; 

  constructor(private contratServices: ContratService) {
  
    
   
   }
  //  get(f){
  //   console.log(f) ;
  //   this.dataob=this.contratServices.addContrat(f.value).subscribe(data=>{console.log(data)})
  //  }

   save()
  {
    
    this.contrat.archive = false ;
    console.log(this.contrat) ;

    this.contratServices.addContrat(this.contrat).subscribe(
     // () => this.listContrat = [this.contrat, ...this.listContrat]
     () => this.dataArray.push(this.contrat) 
    );
      
  }


  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
