import { Component, OnInit } from '@angular/core';
import { Contrat } from 'app/Models/contrat';
import { ContratService } from 'app/contrat/service/contrat.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  selected = 'IA';

  constructor(private contratServices: ContratService, private router:Router) {
    this.contrat = new Contrat();
   }

   save()
  {
    this.contrat.archive = false ;
    console.log(this.contrat) ;
    this.contratServices.addContrat(this.contrat).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['admin/table-listContrat']);
      
  }


  ngOnInit() {
  }

  
 
  

}
