import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.css']
})
export class DetailReclamationComponent implements OnInit {
    id=''
  dataArray:any

  constructor(private servceReclamation: ReclamationServiceService, private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.servceReclamation.retriveReclamation(this.id).subscribe(response=>this.dataArray=response)

   }

  ngOnInit(): void {
  }

}
