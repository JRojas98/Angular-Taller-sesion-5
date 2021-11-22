import { Component, OnInit,ViewChild } from '@angular/core';
import { MascotasServiceService } from '../services/mascotas-service.service';
import { NgForm } from '@angular/forms';
import {SearchMascotaComponent} from '../search-mascota/search-mascota.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})

export class MascotasComponent implements OnInit {

  displayedColumns: string[] = ['name', 'accion'];
  mascotas: any = [];
  resultado: any = [];
  constructor(private mascotasService: MascotasServiceService) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  //Carga datos en la tabla
  cargarDatos() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.obtenerResultado();
      this.mascotas = data;
    });    
  }

  //agrega nueva mascota, obtiene datos del formulario. 
  registerMascota(form: NgForm) {
    this.mascotasService.insertMascota(form.value).subscribe(data => {
      this.cargarDatos();
      this.resultado = data;
      this.resetVariable();
    });
    
    form.reset();
  }

//resetea los resultados de la peticiones
  resetVariable() {
    setTimeout(() => {                   
      this.resultado = [];
      sessionStorage.removeItem("mascotaEliminada");
    }, 3000);
  }


  //Obtiene resultado del eliminar 
  obtenerResultado(){
    if(sessionStorage.getItem("mascotaEliminada")){
      this.resultado = sessionStorage.getItem("mascotaEliminada");
      this.resultado = JSON.parse(this.resultado);
      this.resetVariable();
    }
  }
}
