import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DepartServiceService } from "app/departement/service/depart-service.service";
import { PartenaireserviceService } from "app/Partenaire/service/partenaireservice.service";
import { SharedServiceService } from "app/services/shared-service.service";

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.css']
  })

  export class DeleteDialogCompnent implements OnInit{
    constructor(@Inject(MAT_DIALOG_DATA) public data:any
    , private departmentService: DepartServiceService,private partenaire:PartenaireserviceService,
     private dialogRef: MatDialogRef<DeleteDialogCompnent>, private ss:SharedServiceService
      ){

    }

    deleteDepart(){
      if (this.data.type ==="Departement"){
        this.departmentService.removeDepartement(this.data.id).subscribe({
          next: (value)=>{
         
           this.close()
           this.ss.reloadDepartmentsList.next(true)
          }
         
         })

      }else{
        this.partenaire.removePartenaire(this.data.id).subscribe({
          next: (value)=>{
            this.close()
            this.ss.reloadPartenairesList.next(true)
          }
        })

      }
      
    }

    close(){
      this.dialogRef.close()

    }

    ngOnInit(): void {
        console.log(this.data);
        
    }
  }