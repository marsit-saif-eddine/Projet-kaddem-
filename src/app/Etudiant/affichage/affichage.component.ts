import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class affichageComponent implements OnInit {

 id=''
  dataArray:any
  dataob:Subscription
  constructor(private share:ShareServiceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.share.getoneetudiant(this.id).subscribe(response=>this.dataArray=response)
    
   
   }
 

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
