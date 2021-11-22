import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MascotasComponent } from './mascotas/mascotas.component';
import {SearchMascotaComponent } from './search-mascota/search-mascota.component';

const routes: Routes = [
  {path:'mascotas',component: MascotasComponent},
  {path: '', redirectTo: 'mascotas', pathMatch: 'full'},
  {path:'searchMascota/:name',component: SearchMascotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
