import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from 'app/services/share-service.service';
import { Subscription } from 'rxjs';
import { Etudiant } from '../model/Etudiant';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutComponent implements OnInit {
  size:24
  f:Etudiant=new Etudiant();
  dataArray:any
  dataob:Subscription
  constructor(private share:ShareServiceService , private service:ServiceService, private router:Router) {
  
    
   
   }

   goToEtudiantlist(){
    this.router.navigate(['admin/table-list'])  
    .then(() => {
      window.location.reload();
    });

  }
   get(f){    
    this.dataob=this.service.createEtudiant(f.value).subscribe(data=>{console.log(data);
    this.goToEtudiantlist()},
    (error)=>{console.log(error)}
    );
    this.goToEtudiantlist();
   
   }

  ngOnInit() {
  }
  
 
  

}
