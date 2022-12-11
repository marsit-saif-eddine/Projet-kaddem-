import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';



import jsPDF from 'jspdf';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'affichage-equipe',
  templateUrl: './affichageequipe.component.html',
  styleUrls: ['./affichageequipe.component.css']
})
export class affichagequipeeComponent implements OnInit {

  //@ViewChild('content',{static:false}) el!: ElementRef;
  @Output() myevent=new EventEmitter;
  
  
 id:any
  dataArray:any
  dataob:Subscription
  constructor(private equipeservice:ServiceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.equipeservice.getEquipebyid(this.id).subscribe(response=>this.dataArray=response 
      
    
)
    
   
   }
 

  ngOnInit() {
  }
 ngOnDestroy(){
    this.dataob.unsubscribe()
  }



  print(){
    this.myevent.emit('show me all equipes');
   }


   openPDF(){
  
   let pdf=new jsPDF();
   pdf.text("id:  "+this.dataArray.idEquipe+"   nom: "+this.dataArray.nomEquipe+"   niveau: "+this.dataArray.niveau,10,10);
   
   pdf.save("equipe.pdf");
   

  }
 
  

}
