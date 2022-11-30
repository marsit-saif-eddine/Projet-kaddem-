import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../Etudiant/table-list/table-list.component';
import { FormAjoutComponent } from 'app/Etudiant/form-ajout/form-ajout.component';
import { FormUpdateComponent } from 'app/Etudiant/form-update/form-update.component';
import { affichageComponent } from 'app/Etudiant/affichage/affichage.component';
import { affichageDepartComponent } from 'app/departement/affichageDepart/affichageDepart.component';
import { ajoutDepartComponent } from 'app/departement/ajoutDepart/ajoutDepart.component';
import { updateDepartComponent } from 'app/departement/updateDepart/updateDepart.component';
import { listeDepartComponent } from 'app/departement/listeDepart/listeDepart.component';



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
    { path: 'affichageDepart/:id',     component: affichageDepartComponent },
    { path: 'ajoutDepart',     component: ajoutDepartComponent },
    { path: 'updateDepart',     component: updateDepartComponent },
    { path: 'listeDepart',     component: listeDepartComponent },
  
];
