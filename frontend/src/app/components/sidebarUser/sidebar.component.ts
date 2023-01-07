import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
     
      { path: 'user/user-profile', title: 'User Profile',  icon:'person', class: '' },
      { path: 'user/Fronttable-list', title: 'Blog',  icon:'person', class: '' },
      { path: 'user/mesReclamations', title: 'Reclamations',  icon:'person', class: '' },
      { path: 'user/show', title: 'Mes Equipes',  icon:'person', class: '' },
      { path: 'user/afficheuser', title: ' Departements',  icon:'content_paste', class: '' },
      { path: 'user/affichepart', title: " Partenaires de l'universite",  icon:'content_paste', class: '' },
      { path: 'Log-out', title: 'Logout',  icon:'unarchive', class: 'active-pro' }
     

];

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarUserComponent implements OnInit {
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
