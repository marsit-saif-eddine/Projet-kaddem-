import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarUserComponent } from './sidebarUser/sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarUserComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarUserComponent
  ]
})
export class ComponentsModule { }
