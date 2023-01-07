import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { updateDepartComponent } from '../updateDepart/updateDepart.component';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DepartServiceService } from '../service/depart-service.service';
import { DeleteDialogCompnent } from './delete-dialog/delete-dialog.component';
import { SharedServiceService } from 'app/services/shared-service.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';



@Component({
  selector: 'app-table-list',
  templateUrl: './listeDepart.component.html',
  styleUrls: ['./listeDepart.component.css']
})
export class listeDepartComponent implements OnInit,OnDestroy {
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
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  horizontalPosition: MatSnackBarHorizontalPosition='center';
  notifType='added Succefully'
  




  constructor(private depart:DepartServiceService,
     private router:Router,private matdialog:MatDialog, private share:ShareServiceService, private ss:SharedServiceService
     ,private _snackbar:MatSnackBar)  {
   
   

   }
   ngOnInit() {
    this.departliste();

    this.ss.reloadDepartmentsList.subscribe({ 
      next:(value)=>{
        if(value) {
          this.departliste()
          this.showNotif()
        }
      }
    })
    let sub = this.share.searchText$.subscribe(data=>{
      this.search=data;
// console.log(this.search);
     })
     this.subscriptions.add(sub)
    
  }

  showNotif(){
    console.log("test notif");
    
    this._snackbar.open('Departement',this.notifType,{
      verticalPosition:this.verticalPosition,
      horizontalPosition:this.horizontalPosition

    })
  }
 getid(idDepart){

this.notifType='Deleted'
  this.matdialog.open(DeleteDialogCompnent,{
    data: {id:idDepart,type:"Departement"}
  })
    // this.dataobnb=this.depart.removeDepartement(idDepart).subscribe(data=>{
    //   console.log(data)
    //   this.departliste();
    // })
  }
  onselect(item){
    this.router.navigate(['admin/affichageDepart/'+item.idDepart]);
  }
  OpenPopup(item){
    this.notifType='updated'

    this.matdialog.open(updateDepartComponent,{
      data:item
    })
  }

  openModifier(id) {

    const dialogRef =  this.matdialog.open(updateDepartComponent, {
      //width: '50%',
      //height: '50%',
      data: { idDepart: id}
    });
    // dialogRef.afterClosed().subscribe(result => 
    //   { console.log('aaslema')
    //   if (result){
    //     this.departliste();
    //     console.log(`Dialog result: ${result}`);
    //   }
     
    // });

  }
  departliste():void{
    this.depart.FindAll().subscribe(data=>this.dataArray=data)
  }

   // searchTextt : string ="";
  // onSearchTextEnter(searchvalue : string){
  //   this.searchTextt = searchvalue;
  //   console.log(this.searchTextt)

  // }
  
  onTableDataChange(event:any){
    this.page = event;
    this.departliste();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1 ;
    this.departliste();
  }





  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
