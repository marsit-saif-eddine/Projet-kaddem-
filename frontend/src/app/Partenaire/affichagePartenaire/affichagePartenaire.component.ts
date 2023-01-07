import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { PartenaireserviceService } from '../service/partenaireservice.service';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichagePartenaire.component.html',
  styleUrls: ['./affichagePartenaire.component.css']
})
export class affichagePartenaireComponent implements OnInit {

 id=''
  dataArray:any
  dataob:Subscription
  constructor(private service:PartenaireserviceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.service.findPartenaireById(this.id).subscribe(response=>this.dataArray=response)
    
   
   }
 

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
