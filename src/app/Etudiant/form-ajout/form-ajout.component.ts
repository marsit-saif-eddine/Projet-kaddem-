import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutComponent implements OnInit {
  f:any
  dataArray:any
  dataob:Subscription
  constructor(private share:ShareServiceService) {
  
    
   
   }
   get(f){
    
    this.dataob=this.share.adduser(f.value).subscribe(data=>{console.log(data)})
    
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
