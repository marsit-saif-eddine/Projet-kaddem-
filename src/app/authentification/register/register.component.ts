import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShareServiceService } from 'app/services/share-service.service';
import { userAuthService } from 'app/services/user-auth.service ';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  
  constructor(
    private userAuthService : userAuthService,
    private share: ShareServiceService,
    private router: Router
    ){

  }

  form = new FormGroup(
    {
      password: new FormControl('', Validators.minLength(2)),
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
      const formInvalid = control.touched && this.form.get('password').touched && this.form.invalid;
      return controlInvalid || formInvalid;
    }
  }


  
  ngOnInit(): void{

  }


  

  getErrorMessage(controlName: string) {
    if (this.form.controls[controlName].hasError('minlength')) {
      return 'Must be at least 2 characters'
    }

    return 'Passwords must match'
  }

  ajoutEtudiant(){

  }

}

function passwordMatchValidator(g: FormGroup) {
  const password = g.get('password').value;
  const confirm = g.get('confirm').value
  return password === confirm ? null : { mismatch: true };
}
  