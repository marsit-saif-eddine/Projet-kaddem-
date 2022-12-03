import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './authentification/login/login.component';
import { ListUniversiteComponent } from './Universite/list-universite/list-universite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUniversiteComponent } from './Universite/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './Universite/update-universite/update-universite.component';
import { ListReclamationComponent } from './Reclamation/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './Reclamation/add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from './Reclamation/update-reclamation/update-reclamation.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ListUniversiteComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    ListReclamationComponent,
    AddReclamationComponent,
    UpdateReclamationComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
