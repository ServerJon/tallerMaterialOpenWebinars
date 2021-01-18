import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { TablaComponent } from './views/tabla/tabla.component';
import { TarjetaComponent } from './views/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
