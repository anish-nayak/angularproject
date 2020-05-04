import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landingcomponents/landing.components';
import {LoginComponent} from './components/logincomponents/login.components';
import {AdminComponent} from './components/admincomponents/admin.components';
import {AddPartyComponent} from './components/addpartycomponents/addparty.components';

const routes: Routes = [
  {path:'land' , component:LandingComponent},
  {path:'login' , component:LoginComponent},
  {path:'admin' , component:AdminComponent},
  {path:'addparty' , component:AddPartyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
