import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../Etudiant/table-list/table-list.component';
import { FormAjoutComponent } from 'app/Etudiant/form-ajout/form-ajout.component';
import { FormUpdateComponent } from 'app/Etudiant/form-update/form-update.component';
import { affichageComponent } from 'app/Etudiant/affichage/affichage.component';
import { TableListContratComponent } from 'app/Contrat/table-listContrat/table-list.component';
import { FormAjoutContratComponent } from 'app/Contrat/form-ajoutContrat/form-ajout.component';
import { FormUpdateContratComponent } from 'app/Contrat/form-updateContrat/form-updateContrat.component' ;
import { affichageContratComponent } from 'app/Contrat/affichageContart/affichageContrat.component';
import { TableListBlogComponent } from 'app/Blog/table-listBlog/table-list.component';
import { affichageBlogComponent } from 'app/Blog/affichageBlog/affichageBlog.component';
import { FormAjoutBlogComponent } from 'app/Blog/form-ajoutBlog/form-ajout.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // },{
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'Form-Ajout',     component: FormAjoutComponent },
    { path: 'Form-Update',     component: FormUpdateComponent },
    { path: 'affichage/:id',     component: affichageComponent },
    { path: 'table-listContrat',     component: TableListContratComponent },
    { path: 'Form-AjoutContrat',     component: FormAjoutContratComponent },
    { path: 'Form-UpdateContrat',     component: FormUpdateContratComponent },
    { path: 'affichageContrat/:id',     component: affichageContratComponent },
    { path: 'table-listBlog',     component: TableListBlogComponent },
    { path: 'affichageBlog/:id',     component: affichageBlogComponent },
    { path: 'Form-AjoutBlog',     component: FormAjoutBlogComponent },







  
];
