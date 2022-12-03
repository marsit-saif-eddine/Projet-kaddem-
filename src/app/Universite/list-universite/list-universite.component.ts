import { Component, OnDestroy, OnInit } from '@angular/core';
import { UniversiteServiceService } from 'app/services/Universite/universite-service.service';
import { CommonModule } from "@angular/common";

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UpdateUniversiteComponent } from '../update-universite/update-universite.component';
import { response } from 'express';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit,OnDestroy {
  universites: any
  search: String = ''
  subscriptions = new Subscription()
  dataobnb:Subscription
  title = "pagination";
  count : number =0;
  page : number =1;
  tableSize : number =7;
  tableSizes : any = [5 , 10 , 15 , 20];



  constructor(private universiteService: UniversiteServiceService, private router: Router, private matdialog: MatDialog) {
   }

  ngOnInit(): void {
    this.universiteService.RefreshRequired.subscribe(response => {
      this.UniversiteList()
    })
    
    let sub = this.universiteService.searchText$.subscribe(data=>{
      this.search=data;
      // console.log(this.search);
    })
    this.subscriptions.add(sub)
  }

 UniversiteList():void{
   this.universiteService.getAllUniversites().subscribe((data) => {
       this.universites = data;
      }
   )


 }
  
  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }
  onselect(item) {
    console.log(item.nomUniv)
    //this.router.navigate(['/affichage/'+item.name]);
  }
  onTableDataChange(event:any){
    this.page = event;
    this.UniversiteList();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.UniversiteList();
  }

  deleteUnivByid(id){
    this.dataobnb = this.universiteService.deleteUniversiteById(id).subscribe(() => this.universites = this.universites.filter(universite => universite.idUniv != id),
    error => { console.log("Message d'erreur")}
    );
  }
  OpenPopup(item){
    this.matdialog.open(UpdateUniversiteComponent,{
      data:item
    })
  }
  

}
