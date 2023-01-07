import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { detailEquipe } from '../model/detailEquipe';
import { ServiceService1 } from '../services1/service.service';






@Component({
  selector: 'app-Form-Ajout2',
  templateUrl: './ajoutdetail.component.html',
  styleUrls: ['./ajoutdetail.component.css']
})
export class AjoutedetailComponent implements OnInit {




  firstFormGroup = this._formBuilder.group({
    salle: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    thematique: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    
  });
   
  detail:any
  public result:detailEquipe; 
  var!:number
  id:number
  
  constructor(private _formBuilder: FormBuilder ,private router:Router, private service:ServiceService1 , private route:ActivatedRoute) {
    
      
   
  }



  ngOnInit(): void {
    this.result=new detailEquipe();
    this.id= Number(this.route.snapshot.paramMap.get('id'));
   
  }

  goToEquipelist(){
    this.router.navigate(['admin/listequipe'])
    .then(() => {
      window.location.reload();
    });
  }
      ajouterdetail(){
       
       
       
      if(this.firstFormGroup.valid && this.secondFormGroup.valid ) {
        
      
        this.service.createdetail(this.result).subscribe(data=>{
          data =this.result ;
         
          this.goToEquipelist();
         
          
      },
        (error)=> console.log(error));


       
       
       }

       
       
       this.goToEquipelist();
     

     }
     
     ajouterdetail1(){
      

      this.result.salle=Number(this.firstFormGroup.value.salle);

     }
     ajouterdetail2(){
      
      this.result.thematique=this.secondFormGroup.value.thematique;

     }


  
  
   
   
      
  


}
