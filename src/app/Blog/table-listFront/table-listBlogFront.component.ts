import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareServiceService } from 'app/services/share-service.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContratService } from 'app/contrat/service/contrat.service';
import { Contrat } from 'app/Models/contrat';
//import { FormUpdateComponent } from '../form-update/form-update.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { BlogService } from '../service/blog.service';
import { FormUpdateBlogComponent } from '../form-updateBlog/form-updateBlog.component';
import { MatCardModule } from '@angular/material/card' 



@Component({
  selector: 'app-table-list',
  templateUrl: './table-listBlogFront.component.html',
  styleUrls: ['./table-listBlogFront.component.css']
})
export class TableListFrontComponent implements OnInit,OnDestroy {
  search:String = ''
  dataArray: any
  dataob:Subscription
  dataobnb:Subscription
  subscriptions = new Subscription()
  title = "pagination";
  count : number =0;
  page : number =1;
  tableSize : number =5;
  tableSizes : any = [5 , 10 , 15 , 20];
  blogservices: BlogService;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  constructor(private  blogservice: BlogService,private share:ShareServiceService, private router:Router,private matdialog:MatDialog) {
    this.ContratList();
   

   }

   

  deleteContart(id: any)
  {
    console.log(id) ;
    //principe de call back fi wost l subscribe
    this.blogservice.deleteBlog(id).subscribe(() => this.dataArray = this.dataArray.filter(dataArray => dataArray.idBlog != id),
    error => { console.log("Message d'erreur")}
    );
    
  }

  onselect(item){
    this.router.navigate(['/affichageBlog/'+item.idBlog]);
  }
  OpenPopup(item){
    console.log(item);
    this.matdialog.open(FormUpdateBlogComponent,{
     data:item
   })
  }
  ContratList():void{
    this.blogservice.getBlog().subscribe(
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
    console.log(this.dataArray);
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
