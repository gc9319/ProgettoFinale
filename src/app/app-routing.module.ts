import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { FattureComponent } from './fatture/fatture.component';
import { ComuniComponent } from './comuni/comuni.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { ProvinceComponent } from './province/province.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ComuniInfoComponent } from './comuni-info/comuni-info.component';
import { FattureInfoComponent } from './fatture-info/fatture-info.component';
import { ProvinceInfoComponent } from './province-info/province-info.component';
import { FattureNewComponent } from './fatture-new/fatture-new.component';
import { ComuniNewComponent } from './comuni-new/comuni-new.component';
//import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  /*{
    path:"signup",
    component: AddUserComponent
  },*/
  {
    path:"clients",
    component: ClientsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"clients/:id",
    component: ClientsInfoComponent
  },
  {
    path:"clients/page/:page",
    component: ClientsComponent
  },
  {
    path:"addclient",
    component:  ClientsNewComponent
  },
  {
    path:"comuni",
    component: ComuniComponent
  },
  {
    path:"comuni/:id",
    component: ComuniInfoComponent
  },
  {
    path:"newComune",
    component: ComuniNewComponent
  },
  {
    path:"province",
    component: ProvinceComponent
  },
  {
    path:"province/:id",
    component: ProvinceInfoComponent
  },
  {
    path:"fatture",
    component: FattureComponent
  },
  {
    path:"fatture/:id",
    component: FattureInfoComponent
  },
  {
    path:"fatture/page/:page",
    component: FattureComponent
  },
  {
    path:"newFattura",
    component: FattureNewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
