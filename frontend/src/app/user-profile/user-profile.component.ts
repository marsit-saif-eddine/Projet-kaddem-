import { Component, OnInit } from '@angular/core';
import { userAuthService } from 'app/services/user-auth.service ';

import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShareServiceService } from 'app/services/share-service.service';


import { Etudiant } from 'app/authentification/models/model/Etudiant';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  etudiant :Etudiant;
  data:any
  datarole:any
  role:String
  constructor(
    private userAuthService : userAuthService,
    private share: ShareServiceService,
    private router: Router
    ){
      this.etudiant = new Etudiant();

  } 

  form = new FormGroup(
    {
      idEtudiant: new FormControl(''),
      d: new FormControl(''),
      userPassword: new FormControl('',Validators.minLength(2)),
      prenomE: new FormControl(''),
      nomE: new FormControl(''),
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


  ngOnInit() {
    this.datarole = this.userAuthService.gtRoles();
    this.role=this.datarole[0].roleName;
    this.data=this.userAuthService.getUser()
    console.log(this.data)
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
   
    this.router.navigate(["/Log-out"]);
    

  
      
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
  