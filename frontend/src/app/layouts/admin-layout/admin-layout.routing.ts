import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AccessGuard } from '../guards/access.guard';
import { AccessGuardd } from 'app/components/guards/connected/access.guard';
import { TableListContratComponent } from 'app/Contrat/table-listContrat/table-list.component';

import { TableListBlogComponent } from 'app/Blog/table-listBlog/table-list.component';

import { ListUniversiteComponent } from 'app/Universite/list-universite/list-universite.component';
import { AddUniversiteComponent } from 'app/Universite/add-universite/add-universite.component';

import { affichageDepartComponent } from 'app/departement/affichageDepart/affichageDepart.component';

import { affichagePartenaireComponent } from 'app/Partenaire/affichagePartenaire/affichagePartenaire.component';

import { TableListComponent } from 'app/etudiant/Etudiant/table-list/table-list.component';
import { FormAjoutComponent } from 'app/etudiant/Etudiant/form-ajout/form-ajout.component';
import { FormUpdateComponent } from 'app/etudiant/Etudiant/form-update/form-update.component';
import { affichageComponent } from 'app/etudiant/Etudiant/affichage/affichage.component';
import { affichagequipeeComponent } from 'app/equipe/affichageequipe/affichageequipe.component';
import { FormUpdateequipeComponent } from 'app/equipe/form-update-equipe/form-update-equipe.component';
import { FormAjoutequipeComponent } from 'app/equipe/form-ajout-equipe/form-ajout-equipe.component';
import { TableListequipeComponent } from 'app/equipe/table-list_equipe/table-list-equipe.component';
import { AjoutedetailComponent } from 'app/equipe/detailEquipe/ajoutdetail/ajoutdetail.component';
import { TableListdetailComponent } from 'app/equipe/detailEquipe/table-list_detail/table-list-detail.component';
import { FormUpdatedetailComponent } from 'app/equipe/detailEquipe/form-update-detail/form-update-detail.component';
import { affichagedetailComponent } from 'app/equipe/detailEquipe/affichagedetail/affichagedetail.component';
import { FormAjoutContratComponent } from 'app/Contrat/form-ajoutContrat/form-ajout.component';
import { FormUpdateContratComponent } from 'app/Contrat/form-updateContrat/form-updateContrat.component';
import { affichageContratComponent } from 'app/Contrat/affichageContart/affichageContrat.component';
import { affichageBlogComponent } from 'app/Blog/affichageBlog/affichageBlog.component';
import { FormAjoutBlogComponent } from 'app/Blog/form-ajoutBlog/form-ajout.component';
import { FormUpdateBlogComponent } from 'app/Blog/form-updateBlog/form-updateBlog.component';
import { FormUpdateAffectationComponent } from 'app/Contrat/form-updateAffectation/form-updateAffectation.component';
import { TableListFrontComponent } from 'app/Blog/table-listFront/table-listBlogFront.component';
import { ListReclamationComponent } from 'app/Reclamation/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from 'app/Reclamation/add-reclamation/add-reclamation.component';
import { MesReclamationsComponent } from 'app/Reclamation/mes-reclamations/mes-reclamations.component';
import { ListequipeComponent } from 'app/etudiant/Etudiant/list_equipe/list-equipe.component';
import { mesequipesComponent } from 'app/etudiant/Etudiant/mesequipes/mesequipes';
import { ajoutDepartComponent } from 'app/departement/ajoutDepart/ajoutDepart.component';
import { updateDepartComponent } from 'app/departement/updateDepart/updateDepart.component';
import { listeDepartComponent } from 'app/departement/listeDepart/listeDepart.component';
import { ajoutPartenaireComponent } from 'app/Partenaire/ajoutPartenaire/ajoutPartenaire.component';
import { listePartenaireComponent } from 'app/Partenaire/listePartenaire/listePartenaire.component';
import { updatePartenaireComponent } from 'app/Partenaire/updatePartenaire/updatePartenaire.component';
import { afficheusercomponent } from 'app/departement/afficheuser/afficheuser.component';
import { affichepartComponent } from 'app/Partenaire/affichepart/affichepart.component';
import { LogoutComponent } from 'app/authentification/logout/logout.component';


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
    {
        path: 'admin',
        canActivate: [AccessGuard],
        children: [ 
        { path: 'dashboard',      component: DashboardComponent
     },
        { path: 'user-profile',   component: UserProfileComponent },
        
        { path: 'table-list',  children:[
            { path: 'Form-Ajout',     component: FormAjoutComponent },
          {path:'', component: TableListComponent } ] },
       

        { path: 'Form-Update',     component: FormUpdateComponent },
        { path: 'affichage/:id',     component: affichageComponent },
    
        { path: 'table-listContrat',     component: TableListContratComponent },
    { path: 'Form-AjoutContrat',     component: FormAjoutContratComponent },
    { path: 'Form-UpdateContrat',     component: FormUpdateContratComponent },
    { path: 'affichageContrat/:id',     component: affichageContratComponent },
    { path: 'table-listBlog',     component: TableListBlogComponent },
    { path: 'affichageBlog/:id',     component: affichageBlogComponent },
    { path: 'Form-AjoutBlog',     component: FormAjoutBlogComponent },
    { path: 'listUniversite',     component: ListUniversiteComponent },
    { path: 'addUniversite',     component: AddUniversiteComponent },
    { path: 'listReclamation', component: ListReclamationComponent },

    
{ path: 'affichageDepart/:id',     component: affichageDepartComponent },
{ path: 'ajoutDepart',     component: ajoutDepartComponent },
{ path: 'updateDepart/:id',     component: updateDepartComponent },
{ path: 'listeDepart',     component: listeDepartComponent },
{ path: 'affichagePartenaire',     component: affichagePartenaireComponent },
{path:'ajoutPartenaire', component:ajoutPartenaireComponent},
{path:'listePartenaire', component:listePartenaireComponent},
{path:'updatePartenaire', component:updatePartenaireComponent},
{ path: 'affichagequipe/:id',component: affichagequipeeComponent },
{path:'updateequipe', component:FormUpdateequipeComponent},
{path:'listequipe',
children:[
    {path:'ajoutequipe', component:FormAjoutequipeComponent},
    {path:'', component:TableListequipeComponent}

]},
{path:'ajoutdetail',component:AjoutedetailComponent},
{path:'showdetails/:id', component:TableListdetailComponent},
{path:'updatedetail', component:FormUpdatedetailComponent},
{path:'affichemydetail/:id', component:affichagedetailComponent},
{ path: 'Form-updateBlog', component: FormUpdateBlogComponent},
{path:'affectation/:id',component:ListequipeComponent},

  
    { path: 'admin/Form-ajoutAfect',     component: FormUpdateAffectationComponent },

        {
            path: '**',
            redirectTo: 'user-profile',
            pathMatch: 'full',},
      ]
    },
    {
        path: 'user',
        canActivate: [AccessGuardd],
        children: [ 
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'Fronttable-list',     component: TableListFrontComponent },
        { path: 'addReclamation',     component: AddReclamationComponent },
        { path: 'mesReclamations',     component: MesReclamationsComponent },
        {path:'afficheuser', component:afficheusercomponent},
        {path:'affichepart', component:affichepartComponent},
        {path:'show',component:mesequipesComponent},
        { path: 'user-profile',   component: UserProfileComponent },
        {
            path: '**',
            redirectTo: 'user-profile',
            pathMatch: 'full',},
        
      ]
    },
    { path: 'Log-out',   component: LogoutComponent },
    
   
];


