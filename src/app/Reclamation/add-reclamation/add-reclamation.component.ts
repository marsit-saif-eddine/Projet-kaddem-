import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';
import { userAuthService } from 'app/services/user-auth.service ';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  data:Subscription
dataa:any
user:string
  constructor(private reclamationService:ReclamationServiceService,private router:Router, private service:userAuthService) { }

  ngOnInit(): void {
    this.dataa=this.service.getUser()
    this.user=this.dataa.userName
  }
  addReclamation(FormRec:any) {
    this.data = this.reclamationService.AddandAffectReclamationToStudent(this.user,FormRec.value).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['user/mesReclamations'])
  }
 

}
