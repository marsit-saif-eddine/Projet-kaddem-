import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
     
      { path: 'admin/user-profile', title: 'User Profile',  icon:'person', class: '' },
      { path: 'admin/table-list', title: 'Etudiant',  icon:'content_paste', class: '' },
      { path: 'admin/table-listContrat', title: 'Contrat',  icon:'content_paste', class: '' },
      { path: 'admin/table-listBlog', title: 'Blog',  icon:'content_paste', class: '' },
      { path: 'Log-out', title: 'Logout',  icon:'unarchive', class: 'active-pro' },
      { path: 'admin/listUniversite', title: 'Universite', icon: 'content_paste', class: '' },
      { path: 'admin/listReclamation', title: 'Reclamation', icon: 'content_paste', class: '' },
      { path: 'admin/listeDepart', title: 'Departement',  icon:'content_paste', class: '' },
      { path: 'admin/listequipe', title: 'Equipe',  icon:'content_paste', class: '' },
      { path: 'admin/listePartenaire', title: 'Partenaire',  icon:'person', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
