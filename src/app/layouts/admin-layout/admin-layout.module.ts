import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { FormAjoutComponent } from 'app/etudiant/Etudiant/form-ajout/form-ajout.component';
import { FormUpdateComponent } from 'app/etudiant/Etudiant/form-update/form-update.component';
import { TableListComponent } from 'app/etudiant/Etudiant/table-list/table-list.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination'
import { TableListContratComponent } from 'app/Contrat/table-listContrat/table-list.component';
import { FormAjoutContratComponent } from 'app/Contrat/form-ajoutContrat/form-ajout.component';
import { FormUpdateContratComponent } from 'app/Contrat/form-updateContrat/form-updateContrat.component';
import { affichageContratComponent } from 'app/Contrat/affichageContart/affichageContrat.component';
import { TableListBlogComponent } from 'app/Blog/table-listBlog/table-list.component';
import { FormAjoutBlogComponent } from 'app/Blog/form-ajoutBlog/form-ajout.component';
import { affichageBlogComponent } from 'app/Blog/affichageBlog/affichageBlog.component';
import { ListUniversiteComponent } from 'app/Universite/list-universite/list-universite.component';
import { AddUniversiteComponent } from 'app/Universite/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from 'app/Universite/update-universite/update-universite.component';
import { ListReclamationComponent } from 'app/Reclamation/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from 'app/Reclamation/add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from 'app/Reclamation/update-reclamation/update-reclamation.component';
import { ajoutDepartComponent } from 'app/departement/ajoutDepart/ajoutDepart.component';
import { affichageDepartComponent } from 'app/departement/affichageDepart/affichageDepart.component';

import { ajoutPartenaireComponent } from 'app/Partenaire/ajoutPartenaire/ajoutPartenaire.component';
import { affichagePartenaireComponent } from 'app/Partenaire/affichagePartenaire/affichagePartenaire.component';

import { listeDepartComponent } from 'app/departement/listeDepart/listeDepart.component';
import { updateDepartComponent } from 'app/departement/updateDepart/updateDepart.component';
import { DeleteDialogCompnent } from 'app/departement/listeDepart/delete-dialog/delete-dialog.component';
import { listePartenaireComponent } from 'app/Partenaire/listePartenaire/listePartenaire.component';
import { updatePartenaireComponent } from 'app/Partenaire/updatePartenaire/updatePartenaire.component';
import { affichageComponent } from 'app/etudiant/Etudiant/affichage/affichage.component';
import { ErrorsComponent } from 'app/etudiant/Etudiant/errors/errors.component';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { affichagequipeeComponent } from 'app/equipe/affichageequipe/affichageequipe.component';
import { FormAjoutequipeComponent } from 'app/equipe/form-ajout-equipe/form-ajout-equipe.component';
import { FormUpdateequipeComponent } from 'app/equipe/form-update-equipe/form-update-equipe.component';
import { AjoutedetailComponent } from 'app/equipe/detailEquipe/ajoutdetail/ajoutdetail.component';
import { TableListdetailComponent } from 'app/equipe/detailEquipe/table-list_detail/table-list-detail.component';
import { FormUpdatedetailComponent } from 'app/equipe/detailEquipe/form-update-detail/form-update-detail.component';
import { affichagedetailComponent } from 'app/equipe/detailEquipe/affichagedetail/affichagedetail.component';
import { TableListequipeComponent } from 'app/equipe/table-list_equipe/table-list-equipe.component';

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
    MatIconModule,
    MatStepperModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    FormAjoutComponent,
    FormUpdateComponent,
    TableListContratComponent,
    FormAjoutContratComponent,
    FormUpdateContratComponent,
    affichageContratComponent,
    TableListBlogComponent,
    affichageBlogComponent,
    FormAjoutBlogComponent,
    ListUniversiteComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    ListReclamationComponent,
    AddReclamationComponent,
    UpdateReclamationComponent,
    affichageDepartComponent,
    ajoutDepartComponent,
    listeDepartComponent,
    updateDepartComponent,
    ajoutPartenaireComponent,
    affichagePartenaireComponent,
    listePartenaireComponent,
    updatePartenaireComponent,
    DeleteDialogCompnent,
    affichageComponent,
    ErrorsComponent,
    affichagequipeeComponent,
    FormAjoutequipeComponent,
    TableListequipeComponent,
    FormUpdateequipeComponent,
    AjoutedetailComponent,
    TableListdetailComponent,
    FormUpdatedetailComponent,
    affichagedetailComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})

export class AdminLayoutModule {}
