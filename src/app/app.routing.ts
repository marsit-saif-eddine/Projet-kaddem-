import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './authentification/login/login.component';
import { AccessGuardet } from './components/guards/access.guard';
import { AccessGuardd } from './components/guards/connected/access.guard';
import { AccessGuard } from './layouts/guards/access.guard';
import { RegisterComponent } from './authentification/register/register.component';
import { AccessGuardii } from './components/guards/guardii/access.guard';

const routes: Routes =[
  { path: 'register',   canActivate:[AccessGuardii]  ,component: RegisterComponent },
  { path: 'login',   canActivate:[AccessGuardet]  ,component: LoginComponent },
  
  {
    path: '',
    canActivate: [AccessGuard],
    redirectTo: 'admin',
    pathMatch: 'full',
    
  },
  {
    path: '',
    canActivate: [AccessGuardd],
    redirectTo: 'user',
    pathMatch: 'full',
    
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: '**',
    canActivate: [AccessGuard],
    redirectTo: 'admin',
    pathMatch: 'full',
    
  },
  {
    path: '**',
    canActivate: [AccessGuardd],
    redirectTo: 'user',
    pathMatch: 'full',
    
  },
  
  
 
  
  
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
