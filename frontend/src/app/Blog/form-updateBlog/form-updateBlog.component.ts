import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../service/blog.service';


@Component({
  selector: 'app-Form-Update',
  templateUrl: './form-updateBlog.component.html',
  styleUrls: ['./form-updateBlog.component.css']
})
export class FormUpdateBlogComponent implements OnInit {
  

  result:any
  dataArray:any
  dataob:Subscription
  name:string
  titre: string
  description: string
  image: string 
  idB: any

 
 


  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private  blogservice: BlogService, private router:Router , private matdialog:MatDialog) {
    
    
    
   }
   
   Reactiveform=new FormGroup({
    titre:new FormControl("",Validators.required),
    description:new FormControl("",[Validators.required, Validators.minLength(20)]),
    image: new FormControl(""),
    idBlog: new FormControl(""),

})

onSubmit()
{

  this.blogservice.updateBlog(this.Reactiveform.value.idBlog,this.Reactiveform.value).subscribe(
    () => window.location.reload()
      )
    }
   

  ngOnInit() {
    this.result=this.data
    this.Reactiveform.setValue({
      titre:this.result.titre,
      description:this.result.description,
      image: this.result.image,
      idBlog: this.result.idBlog,
      
    })
    
  }
  
 
  

}
