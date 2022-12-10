import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationServiceService } from 'app/services/Reclamation/reclamation-service.service';
import { UpdateReclamationComponent } from '../update-reclamation/update-reclamation.component';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.css']
})
export class MesReclamationsComponent implements OnInit {
  reclamations:any

  constructor(private reclamationService: ReclamationServiceService, private matdialog: MatDialog) { }

  ngOnInit(): void {
    this.MesReclamationList()

    this.reclamationService.RefreshRequired.subscribe(response => {
        this.MesReclamationList()
    })
  }
  
  MesReclamationList(): void{
    this.reclamationService.MesReclamations("saif").subscribe((data) => {
      console.log(data);
      this.reclamations = data;
      }
   )
  }

  OpenPopup(item){
    this.matdialog.open(UpdateReclamationComponent,{
      data:item
    })
  }
  

}
