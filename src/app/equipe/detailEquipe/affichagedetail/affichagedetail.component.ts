import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { ServiceService1 } from '../services1/service.service';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichagedetail.component.html',
  styleUrls: ['./affichagedetail.component.css']
})
export class affichagedetailComponent implements OnInit {
  dataArray:any
 id!:number 
 size=24
  
  dataob:Subscription
  constructor( @Inject(MAT_DIALOG_DATA) public data:any ,private route:ActivatedRoute , private service:ServiceService1) {
    //this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(data=>this.id=Number(data.id))
    //this.service.getdetailparequipe(this.id).subscribe(response=>this.dataArray)
    this.service.getdetailparequipe(this.data).subscribe(data=>{
      this.dataArray=data ;
      console.log(data)},
      (error)=>console.log(error))


    
    
   
   }
 

  ngOnInit() {
    
  }

 
  

}
