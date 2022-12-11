import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShareServiceService } from 'app/services/share-service.service';
import { userAuthService } from 'app/services/user-auth.service ';

import { Etudiant } from '../models/model/Etudiant';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  etudiant :Etudiant;
  constructor(
    private userAuthService : userAuthService,
    private share: ShareServiceService,
    private router: Router
    ){
      this.etudiant = new Etudiant();

  } 

  form = new FormGroup(
    {
      idEtudiant: new FormControl('',Validators.required),
      d: new FormControl('', Validators.required),
      userPassword: new FormControl('',Validators.minLength(2)),
      prenomE: new FormControl('', Validators.minLength(2)),
      nomE: new FormControl('', Validators.minLength(2)),
      confirm: new FormControl('', Validators.minLength(2)),
    },
    passwordMatchValidator
  );

  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.form.get('confirm').touched && this.form.invalid;
      return controlInvalid || formInvalid;
    }
  }

  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.form.get('userPassword').touched && this.form.invalid;
      return controlInvalid || formInvalid;
    }
  }


  
  ngOnInit(): void{

  }

  save()
  {
    this.etudiant.idEtudiant = this.form.value.idEtudiant;
    this.etudiant.d=this.form.value.d;
    this.etudiant.nomE=this.form.value.nomE;
    this.etudiant.prenomE=this.form.value.prenomE;
    this.etudiant.userPassword=this.form.value.userPassword;
    this.share.register(this.etudiant).subscribe(data=>{
      console.log(data);
      
    })
   
    this.router.navigate(["/login"]);
    

  
      
  }
  

  getErrorMessage(controlName: string) {
    if (this.form.controls[controlName].hasError('minlength')) {
      return 'Must be at least 2 characters'
    }
    else if (this.form.controls[controlName].hasError('required')) {
      return 'Input is required'
    }

    return 'Passwords must match'
  }

  ajoutEtudiant(){

  }

}

function passwordMatchValidator(g: FormGroup) {
  const password = g.get('userPassword').value;
  const confirm = g.get('confirm').value
  return password === confirm ? null : { mismatch: true };
}
  