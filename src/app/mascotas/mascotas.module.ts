import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from './mascotas.component';
import { NavbarComponent } from '../menu/navbar/navbar.component';


@NgModule({
  declarations: [MascotasComponent,NavbarComponent],
  imports: [
    CommonModule,
    MascotasComponent
  ],
  exports:[
    NavbarComponent
  ]
})
export class MascotasModule { }
