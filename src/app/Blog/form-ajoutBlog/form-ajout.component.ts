import { Component, OnInit } from '@angular/core';
import { Contrat } from 'app/Models/contrat';
import { ContratService } from 'app/contrat/service/contrat.service';
import { Subscription } from 'rxjs';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Form-Ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutBlogComponent implements OnInit {
  dataob:Subscription
  blog:any ;


  constructor(private blogservice: BlogService , private router:Router) {
   }

   save(f: any)
  {

    console.log(f.value) ;
     this.blogservice.addBlog(f.value).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['admin/table-listBlog'])
  }
 
      
  


  ngOnInit(): void {

  }

 
 
  

}
