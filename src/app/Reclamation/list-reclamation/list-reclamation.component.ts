import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { DetailReclamationComponent } from '../detail-reclamation/detail-reclamation.component';
import { UpdateReclamationComponent } from '../update-reclamation/update-reclamation.component';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit, OnDestroy {
  reclamations: any
  search: String = ''
  subscriptions = new Subscription()
  dataobnb:Subscription
  title = "pagination";
  count : number =0;
  page : number =1;
  tableSize : number =7;
  tableSizes : any = [5 , 10 , 15 , 20];

  constructor(private reclamationService: ReclamationServiceService, private matdialog: MatDialog, private share: ShareServiceService) { }

  ngOnInit(): void {
    this.ReclamationList()

    this.reclamationService.RefreshRequired.subscribe(response => {
        this.ReclamationList()
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

  ReclamationList():void{
   this.reclamationService.getAllReclamation().subscribe((data) => {
       this.reclamations = data;
      }
   )
  }
  
  onTableDataChange(event:any){
    this.page = event;
    this.ReclamationList();
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ReclamationList();

  }

  deleteRecByid(id){
    this.dataobnb = this.reclamationService.deleteReclamation(id).subscribe(() => this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation != id),
    error => { console.log("Message d'erreur")}
    );
  }
  
  onselect(item) {
    console.log(item.objet)
     this.matdialog.open(DetailReclamationComponent,{
      data:item
     })
    console.log(item?.etudiants?.nomE)
  }

  OpenPopup(item){
    this.matdialog.open(UpdateReclamationComponent,{
      data:item
    })
  }

}
