import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContratService } from 'app/contrat/service/contrat.service';
import { Contrat } from 'app/Models/contrat';
import { FormUpdateContratComponent } from '../form-updateContrat/form-updateContrat.component';
//import { FormUpdateComponent } from '../form-update/form-update.component';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListContratComponent implements OnInit,OnDestroy {
  search:String = ''
  dataArray: Contrat[] 
  dataob:Subscription
  dataobnb:Subscription
  subscriptions = new Subscription()
  title = "pagination";
  count : number =0;
  page : number =1;
  tableSize : number =5;
  tableSizes : any = [5 , 10 , 15 , 20];


  constructor(private  contartService: ContratService,private share:ShareServiceService, private router:Router,private matdialog:MatDialog) {
    this.ContratList();
   

   }
 

  deleteContart(id: any)
  {
    console.log(id) ;
    //principe de call back fi wost l subscribe
    this.contartService.deleteContrat(id).subscribe(() => this.dataArray = this.dataArray.filter(Contrat => Contrat.idContrat != id),
    error => { console.log("Message d'erreur")}
    );
    
  }

  onselect(item){
    this.router.navigate(['/affichageContrat/'+item.idContrat]);
  }
  OpenPopup(item){
    console.log(item);
    this.matdialog.open(FormUpdateContratComponent,{
     data:item
   })
  }
  ContratList():void{
    this.contartService.getContrat().subscribe(
      (data: any) => {
         this.dataArray = data;
      });
  }

  // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this.ContratList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.ContratList();
  }


  ngOnInit() {
   let sub = this.share.searchText$.subscribe(data=>{
      this.search=data;
       console.log(this.search);
    })
    this.subscriptions.add(sub)
    
  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
