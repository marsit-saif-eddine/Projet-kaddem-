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
  userFile ;
  imgURL: any;
  public message: string;
  public imagePath;

  


  constructor(private blogservice: BlogService , private router:Router) {
   }

   save(f: any)
  {
    let formData:FormData = new FormData();
    const blog = f.value ; 
    formData.append('blog',JSON.stringify(blog));
    formData.append('file',this.userFile);   
    console.log(formData);
    this.blogservice.addBlog(formData).subscribe(
    data => {
    console.log(data)
    })
    this.router.navigate(['admin/table-listBlog'])
  }
 
      
  


  ngOnInit(): void {

  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}

 
 
  

}
