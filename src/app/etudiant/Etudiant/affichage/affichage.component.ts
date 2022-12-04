import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class affichageComponent implements OnInit {


 id:any
  dataArray:any
 size:24;

  constructor(private service:ServiceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    console.log(this.id)
    this.service.getEtudiantbyid(this.id).subscribe(response=>this.dataArray=response)
   
   
   }
 

  ngOnInit() {
  }
  
  

}
