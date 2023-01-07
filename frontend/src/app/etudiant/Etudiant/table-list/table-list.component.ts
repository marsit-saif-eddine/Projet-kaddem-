import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormUpdateComponent } from '../form-update/form-update.component';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit,OnDestroy {
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


  constructor(private share:ShareServiceService, private router:Router,private matdialog:MatDialog,private service:ServiceService) {
    this.EtudiantList();
   

   }
  getid(id){
    this.dataobnb=this.service.deleteEtudiant(id).subscribe(data=>{console.log(data);
      this.router.navigate(['/table-list']);});
      //this.router.navigate(['/table-list']);
      window.location.reload();
    

  }
  onselect(item){
    this.router.navigate(['admin/affichage/'+item]);
  }
  OpenPopup(item){
    console.log(item);
    this.matdialog.open(FormUpdateComponent,{
      data:item
    })
  }
  EtudiantList():void{
    
    this.service.getEtudiants().subscribe(data=>{this.dataArray=data,
    console.log(data)})
  }

  // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this.EtudiantList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.EtudiantList();
  }


  ngOnInit() {
    let sub = this.share.searchText$.subscribe(data=>{
      this.search=data;
      // console.log(this.search);
    })
    this.subscriptions.add(sub)
    
  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
