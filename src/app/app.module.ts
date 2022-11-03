import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDespachoComponent } from './components/add-despacho/add-despacho.component';
import { AddPasajeroComponent } from './components/add-pasajero/add-pasajero.component';
import { ListPasajeroComponent } from './components/list-pasajero/list-pasajero.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDespachoComponent,
    AddPasajeroComponent,
    ListPasajeroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
