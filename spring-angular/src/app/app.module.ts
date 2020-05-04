import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";

 import {FormsModule,ReactiveFormsModule} from '@angular/forms';
 import {LandingComponent} from './components/landingcomponents/landing.components';
 import {LoginComponent} from './components/logincomponents/login.components';
 import {AdminComponent} from './components/admincomponents/admin.components';
 import {AddPartyComponent} from './components/addpartycomponents/addparty.components';
 





@NgModule({
  declarations: [
    AppComponent,LandingComponent,LoginComponent,AdminComponent,AddPartyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
