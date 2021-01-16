import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaComponent } from './views/tabla/tabla.component';
import { TarjetaComponent } from './views/tarjeta/tarjeta.component';

const routes: Routes = [
  { path: 'tabla', component: TablaComponent},
  { path: 'tarjeta', component: TarjetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
