import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormUpdateequipeComponent } from '../form-update-equipe/form-update-equipe.component';
import { ServiceService } from '../services/service.service';
import { TableListdetailComponent } from '../detailEquipe/table-list_detail/table-list-detail.component';
import { affichagedetailComponent } from '../detailEquipe/affichagedetail/affichagedetail.component';






@Component({
  selector: 'app-table-list1',
  templateUrl: './table-list-equipe.component.html',
  styleUrls: ['./table-list-equipe.component.css']
})
export class TableListequipeComponent implements OnInit,OnDestroy {
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


  constructor(private share:ShareServiceService, private service:ServiceService, private router:Router,private matdialog:MatDialog) {
    this.EquipeList();
   

   }
  getid(id){
    this.dataobnb=this.service.deleteEquipe(id).subscribe(data=>{console.log(data);
    this.EquipeList();})
    window.location.reload();
    
  }
  onselect(item){
    this.router.navigate(['admin/affichagequipe/'+item.idEquipe]);
  }
  OpenPopup(item){
    this.matdialog.open(FormUpdateequipeComponent,{
      data:item
    })
  }
  EquipeList():void{
    this.service. getEquipes().subscribe((data)=>{this.dataArray=data},
    (error)=> console.log(error))
  }

  // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this.EquipeList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.EquipeList();
  }
  getDetail(id){
    //console.log(id);
    //this.router.navigate(['http://localhost:4200/showdetails/'+id]);
    //this.router.navigate(['http://localhost:4200/showdetails/2']);
    this.matdialog.open(TableListdetailComponent,{
      data:id
    })


  }
  addDetail(item){
    this.router.navigate(['admin/ajoutdetail/'+item.idEquipe]);

  }


  ngOnInit() {
    let sub = this.share.searchText$.subscribe(data=>{
      this.search=data;
      // console.log(this.search);
    })
    this.subscriptions.add(sub)
    
  }
 
  getmyDetail(id){
    //this.router.navigate(['/affichemydetail/'+id]);
    this.matdialog.open(affichagedetailComponent,{
      data:id
    })
   

  }

   ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

 


  printdata(event:any){
    console.log("event");
  }




  

}
