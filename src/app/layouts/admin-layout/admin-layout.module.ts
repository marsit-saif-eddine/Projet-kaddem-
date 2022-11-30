import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { FormAjoutComponent } from '../../Etudiant/form-ajout/form-ajout.component';
import { FormUpdateComponent } from '../../Etudiant/form-update/form-update.component';
import { TableListComponent } from '../../Etudiant/table-list/table-list.component';
import { affichageComponent } from 'app/Etudiant/affichage/affichage.component';
import { affichageDepartComponent } from 'app/departement/affichageDepart/affichageDepart.component';
import { ajoutDepartComponent } from '../../departement/ajoutDepart/ajoutDepart.component';
import { updateDepartComponent } from '../../departement/updateDepart/updateDepart.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination'
import { listeDepartComponent } from 'app/departement/listeDepart/listeDepart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    FormAjoutComponent,
    FormUpdateComponent,
    affichageComponent,
    affichageDepartComponent,
    ajoutDepartComponent,
    listeDepartComponent,
    updateDepartComponent,


  ]
  
})

export class AdminLayoutModule {}
