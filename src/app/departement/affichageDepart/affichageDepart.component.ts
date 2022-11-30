import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { DepartServiceService } from '../service/depart-service.service';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichageDepart.component.html',
  styleUrls: ['./affichageDepart.component.css']
})
export class affichageDepartComponent implements OnInit {

 id=''
  dataArray:any
  dataob:Subscription
  constructor(private depart:DepartServiceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.depart.findDepartementById(this.id).subscribe(response=>this.dataArray=response)
    
   
   }
 

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
