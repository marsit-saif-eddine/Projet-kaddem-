import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class notif implements OnInit  {
 
  snackBarRef= Inject(MatSnackBarRef) 
    
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any){ }


  ngOnInit(): void {
    console.log(this.data);
    
  }

}
