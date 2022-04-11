import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


import { PwelcomeComponent } from './pwelcome/pwelcome.component';
import { LoginComponent } from './user/login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AjouterAdminComponent } from './superAdmin/ajouter-admin/ajouter-admin.component';
import { HomeComponent } from './home/home.component';
import { ListAdminComponent } from './superAdmin/list-admin/list-admin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddEntrepriseComponent } from './entreprise/add-entreprise/add-entreprise.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfilComponent } from './user/profil/profil.component';
import { ListEntrepriseComponent } from './entreprise/list-entreprise/list-entreprise.component';
import { ProfilEntrepriseComponent } from './entreprise/profil-entreprise/profil-entreprise.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuperadminHomeComponent } from './superAdmin/superadmin-home/superadmin-home.component';
import { StatestiqueComponent } from './superAdmin/statestique/statestique.component';
import { StatestiqueadminComponent } from './superAdmin/statestiqueadmin/statestiqueadmin.component';
import { StatestiqueworkflowComponent } from './superAdmin/statestiqueworkflow/statestiqueworkflow.component';

import { DatePipe } from '@angular/common';

import { LoginEntrepriseComponent } from './entreprise/login-entreprise/login-entreprise.component';
import { HomeEntrepriseComponent } from './entreprise/home-entreprise/home-entreprise.component';
import { NarEntrepriseComponent } from './entreprise/nar-entreprise/nar-entreprise.component';
import { ProfilEntComponent } from './entreprise/profil-ent/profil-ent.component';


import { HomeadminComponent } from './Dashbordadmin/homeadmin/homeadmin.component';
import { NavBarAdminComponent } from './Dashbordadmin/nav-bar-admin/nav-bar-admin.component';
import { WorkflowComponent } from './Dashbordadmin/workflow/workflow.component';
import { PagestatestiqueadminComponent } from './Dashbordadmin/pagestatestiqueadmin/pagestatestiqueadmin.component';
import { ListWorkflowComponent } from './workflow/list-workflow/list-workflow.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GroupuserComponent } from './entreprise/groupuser/groupuser.component';



const routes: Routes = [
  { path:'', component: PwelcomeComponent },
  { path: 'SignUp', component: SignUpComponent },
  {path:"Login", component: LoginComponent},
  {path:'Home', component: HomeComponent},
  {path:'LoginEntreprise', component:LoginEntrepriseComponent},
  {path:'HomeEntreprise',component:HomeEntrepriseComponent},
  { path: 'ProfilEnt/:id', component: ProfilEntComponent},





//dashbord super admin

  { path: 'homeSuperadmin', component: SuperadminHomeComponent ,children:[
    { path: 'statestique', component: StatestiqueComponent },
    //admin
    { path: 'liste_admin', component: ListAdminComponent },
    { path: 'ajouter_admin', component: AjouterAdminComponent },
    //entreprise
    { path: 'list-entreprise', component: ListEntrepriseComponent },
    { path: 'add_entreprise', component: AddEntrepriseComponent },
    //workflow
    { path: 'list_workflow', component: ListWorkflowComponent },

  ]},

  { path: 'list_workflow', component: ListWorkflowComponent },



  { path: 's', component:StatestiqueadminComponent },

//dashbord admin
{ path: 'homeadmin', component: HomeadminComponent,children:[
  { path: 'list-entreprise', component: ListEntrepriseComponent },
  { path: 'add_entreprise', component: AddEntrepriseComponent },
  { path: 'home', component: PagestatestiqueadminComponent },


]},

//dashbord entreprise
{ path: 'homeentreprise', component: HomeEntrepriseComponent,children:[
  { path: 'group', component: GroupuserComponent },

]},

//dashbord user
// { path: 'homeuser', component: UserProfilComponent,children:[
//   { path: 'profil', component: ProfilComponent },

// ]},


  { path: 'profil-entreprise/:id', component: ProfilEntrepriseComponent },
  { path: 'add_employee', component: AddEmployeeComponent },
  { path: 'list_employee', component: ListEmployeeComponent },
  { path: 'UserProfil/:id', component: ProfilComponent },
  { path: 'Profil/:id', component: UserProfilComponent },


];
  // <-- import RouterModule and define routes

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    FooterComponent,
    PwelcomeComponent,
    LoginComponent,
    NavbarComponent,
    AjouterAdminComponent,
    HomeComponent,
    ListAdminComponent,
    AddEmployeeComponent,
    AddEntrepriseComponent,
    ListEmployeeComponent,
    ProfilComponent,
    ListEntrepriseComponent,
    ProfilEntrepriseComponent,
    UserProfilComponent,
    SidebarComponent,
    SuperadminHomeComponent,
    StatestiqueComponent,



    StatestiqueadminComponent,
    StatestiqueworkflowComponent,

    LoginEntrepriseComponent,
    HomeEntrepriseComponent,
    NarEntrepriseComponent,
    ProfilEntComponent,



    HomeadminComponent,
    NavBarAdminComponent,
    WorkflowComponent,
    PagestatestiqueadminComponent,
    ListWorkflowComponent,
    GroupuserComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,




  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
