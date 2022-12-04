import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'affichage-Update',
  templateUrl: './affichageBlog.component.html',
  styleUrls: ['./affichageBlog.component.css']
})
export class affichageBlogComponent implements OnInit {

  id=''
  dataArray:any
  dataob:Subscription

  constructor(private share:BlogService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.share.getbyId(this.id).subscribe(response=>this.dataArray=response)
    
   
   }
 

  ngOnInit() {
  }
  ngOnDestroy(){
    this.dataob.unsubscribe()
  }
 
  

}
