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
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./talist-equipe.component.css']
})
export class ListequipeComponent implements OnInit,OnDestroy {
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
    this.route.params.subscribe(data=>this.id=data.id)
   

   }

  onselect(id){
    this.service.affectetudianttoequipe(this.id,id,'').subscribe((data)=>{console.log("done")},
    (error)=> console.log(error))
  
  }
  
  EquipeList():void{
    this.service.getEquipes().subscribe((data)=>{this.dataArray=data},
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
    let sub = this.share.searchText$.subscribe(data=>{
      this.search=data;
    
    })
    this.subscriptions.add(sub)
    
  }
 
  getmyDetail(id){
    //this.router.navigate(['/affichemydetail/'+id]);
    this.matdialog.open(affichagedetailComponent,{
      data:id
    })
   

  }



  show(){
    /*this.service.showmyequipes(this.id).subscribe((data)=>{console.log("done")},
    (error)=> console.log(error))*/
     
  }

 



  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }



  

}
