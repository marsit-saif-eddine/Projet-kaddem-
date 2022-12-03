import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversiteServiceService } from 'app/services/Universite/universite-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
    data:Subscription


  constructor(private universiteService:UniversiteServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  showFormUniversite(FormUniv:any) {
    console.log(FormUniv);
  }
  addUniversite(FormUniv:any) {
    this.data = this.universiteService.addUniversite(FormUniv.value).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['/listUniversite'])
  }
 

}
