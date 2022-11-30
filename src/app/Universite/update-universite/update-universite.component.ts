import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteServiceService } from 'app/services/Universite/universite-service.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  idUniv: any
  

  formUniversite = this.FormBuilder.group({
    idUniv:[,Validators.required],
    nomUniv:['',[Validators.required,Validators.minLength(3)]],
  });
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private universiteService: UniversiteServiceService
    , private FormBuilder: FormBuilder, private acr: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.data)
    this.formUniversite.get("idUniv").setValue(this.data)

  }
  showFormBuilder(){
    console.log(this.formUniversite)
  }
  get nomUniv(){
    return this.formUniversite.get('nomUniv')
  }
  
  updateUniversite(universite: any) {
    
    this.data = this.universiteService.updateUniversite(universite).subscribe(
      data => {
        console.log(data)
      })
  }


}
