import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class notif  {
 
    
    
  snackBarRed= Inject(MatSnackBarRef) 


  

}
