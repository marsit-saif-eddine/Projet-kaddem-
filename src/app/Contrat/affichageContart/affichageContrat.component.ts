import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratService } from 'app/contrat/service/contrat.service';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichageContrat.component.html',
  styleUrls: ['./affichageContrat.component.css']
})
export class affichageContratComponent implements OnInit {

   id=''
  dataArray:any
  
  constructor(private share:ContratService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.share.getbyId(this.id).subscribe(response=>this.dataArray=response)
    
   
   }
 

  ngOnInit() {
  }
  
 
  

}
