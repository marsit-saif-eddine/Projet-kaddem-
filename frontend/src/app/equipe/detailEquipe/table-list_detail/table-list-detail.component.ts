import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ServiceService1 } from '../services1/service.service';
import { FormUpdatedetailComponent } from '../form-update-detail/form-update-detail.component';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list-detail.component.html',
  styleUrls: ['./table-list-detail.component.css']
})
export class TableListdetailComponent implements OnInit,OnDestroy {
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
  id:any
  d:any

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private share:ShareServiceService, private service:ServiceService1, private router:Router,private matdialog:MatDialog
     , private route:ActivatedRoute ) {
    this.DetailList();
   

   }
  getid(item){
    console.log(item.idDetailEquipe)
    this.dataobnb=this.service.deletedetail(item.idDetailEquipe).subscribe(data=>{console.log(data);
    this.DetailList()
    
    window.location.reload();
    ;})
    
  }
  onselect(item){
    this.router.navigate(['admin/affichage/'+item.name]);
  }
 /* OpenPopup(item){
    this.matdialog.open(FormUpdateequipeComponent,{
      data:item
    })
  }*/
  DetailList():void{
    this.service. getdetails().subscribe((data)=>{this.dataArray=data},
    (error)=> console.log(error))
  }

  // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this. DetailList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this. DetailList();
  }



  ngOnInit() {
    let sub = this.share.searchText$.subscribe
    (data=>{
      this.search=data;
      // console.log(this.search);
    })
    this.subscriptions.add(sub)
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    
    
  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }
 
  OpenPopup(item){
    this.matdialog.open(FormUpdatedetailComponent,{
      data:item
    })
  }
  addDetail(item){
    this.router.navigate(['admin/ajoutdetail/'+item.idEquipe]);

  }
  getmyDetail() {
   
 
  }
  affecterDetail(item){
    console.log(this.data,item.idDetailEquipe)
  this.service.affecter(this.data,item.idDetailEquipe,this.d).subscribe(data=>{
    console.log('affectation terminee')
  });

}



}
