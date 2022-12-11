import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PartenaireserviceService } from '../service/partenaireservice.service';
import { Partenaire } from '../partenaire';
import { SharedServiceService } from 'app/services/shared-service.service';
@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './ajoutPartenaire.component.html',
  styleUrls: ['./ajoutPartenaire.component.css']
})
export class ajoutPartenaireComponent implements OnInit {
  partenaire!:Partenaire
  dataArray:any
  dataob:Subscription
  
  constructor(private service:PartenaireserviceService,private router:Router, private ss : SharedServiceService) {
  
   }
   goToPartenairelist(){
    this.router.navigate(['admin/listePartenaire'])
  }
   get(partenaire){
    console.log(partenaire.value);
    this.dataob=this.service.Ajouter_Partenaire(partenaire.value).subscribe(data=>{
      this.ss.reloadPartenairesList.next(true)
    this.goToPartenairelist(); 

    });
    
    
   }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
}
