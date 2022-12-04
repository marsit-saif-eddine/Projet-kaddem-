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
import { TableListContratComponent } from 'app/Contrat/table-listContrat/table-list.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination'
import { FormAjoutContratComponent } from 'app/Contrat/form-ajoutContrat/form-ajout.component';
import { FormUpdateContratComponent } from 'app/Contrat/form-updateContrat/form-updateContrat.component' ;
import { affichageContratComponent } from 'app/Contrat/affichageContart/affichageContrat.component';
import { TableListBlogComponent } from 'app/Blog/table-listBlog/table-list.component';
import { affichageBlogComponent } from 'app/Blog/affichageBlog/affichageBlog.component';
import { FormAjoutBlogComponent } from 'app/Blog/form-ajoutBlog/form-ajout.component';
import { FormUpdateBlogComponent } from 'app/Blog/form-updateBlog/form-updateBlog.component';




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
    TableListContratComponent,
    FormAjoutContratComponent,
    FormUpdateContratComponent,
    affichageContratComponent,
    TableListBlogComponent,
    affichageBlogComponent,
    FormAjoutBlogComponent,
    FormUpdateBlogComponent,



  ]
  
})

export class AdminLayoutModule {}
