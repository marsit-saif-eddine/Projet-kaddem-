import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  data:Subscription

  constructor(private reclamationService:ReclamationServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addReclamation(FormRec:any) {
    this.data = this.reclamationService.AddandAffectReclamationToStudent(2,FormRec.value).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['/mesReclamations'])
  }

}
