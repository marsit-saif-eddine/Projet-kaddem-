import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { updatePartenaireComponent } from '../updatePartenaire/updatePartenaire.component';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PartenaireserviceService } from '../service/partenaireservice.service';
import { DeleteDialogCompnent } from 'app/departement/listeDepart/delete-dialog/delete-dialog.component';
import { SharedServiceService } from 'app/services/shared-service.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './listePartenaire.component.html',
  styleUrls: ['./listePartenaire.component.css']
})
export class listePartenaireComponent implements OnInit,OnDestroy {
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


  constructor(private service:PartenaireserviceService,
     private router:Router,private matdialog:MatDialog, private share:ShareServiceService, private ss:SharedServiceService) {
    
   

   }
 getid(idPart){
  this.matdialog.open(DeleteDialogCompnent,{
    data: {id:idPart,type:"Partenaire"}
  })
    






  }
  onselect(item){
    this.router.navigate(['admin/affichagePartenaire/'+item.idPart]);
  }
  OpenPopup(item){
    this.matdialog.open(updatePartenaireComponent,{
      data:item
    })
  }

  openModifier(id) {

    const dialogRef =  this.matdialog.open(updatePartenaireComponent, {
      //width: '50%',
      //height: '50%',
      data: { idPart: id, type:"part"}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listePartenaire();
      console.log(`Dialog result: ${result}`);
    });
  }
  listePartenaire():void{
    this.service.FindAll().subscribe(data=>this.dataArray=data)
  }

   // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this.listePartenaire();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.listePartenaire();
  }


  ngOnInit() {
    this.listePartenaire();

    this.ss.reloadPartenairesList.subscribe({ 
      next:(value)=>{
        if(value)     this.listePartenaire();

      }
    })
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
