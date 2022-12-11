import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../services/service.service';
import { affichagedetailComponent } from 'app/equipe/detailEquipe/affichagedetail/affichagedetail.component';







@Component({
  selector: 'app-table-list2',
  templateUrl: './mesequipes.html',
  styleUrls: ['./mesequipes.css']
})
export class mesequipesComponent implements OnInit {
  search:String = ''
  dataArray:any
  dataob:Subscription
  dataobnb:Subscription
  subscriptions = new Subscription()
  title = "pagination";
  count : number =0;
  page : number =1;
  tableSize : number =7;
  tableSizes : any = [5 , 10 , 15 , 20];
  id:any;


  constructor(private share:ShareServiceService, private service1:ServiceService, private service:ServiceService, private router:Router,
    private matdialog:MatDialog,private route:ActivatedRoute) {
    

    this.EquipeList();
   

   }

 
  
  EquipeList():void{
    this.service.showmyequipes("saif").subscribe((data)=>{this.dataArray=data;
    console.log("done")},
    (error)=> console.log(error))
  }


  
  onTableDataChange(event:any){
    this.page = event;
    this.EquipeList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.EquipeList();
  }
 


  ngOnInit() {
    
    
  }
 
 



  /*show(){
    this.service.showmyequipes(this.id).subscribe((data)=>{console.log("done")},
    (error)=> console.log(error))
     
  }*/

 



 



  

}
