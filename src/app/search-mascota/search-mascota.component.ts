import { Component, OnInit, Input  } from '@angular/core';
import { MascotasServiceService } from '../services/mascotas-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-mascota',
  templateUrl: './search-mascota.component.html',
  styleUrls: ['./search-mascota.component.css']
})
export class SearchMascotaComponent implements OnInit {
  resultado: any = [];
  mascota: any = [];
  constructor(
    private mascotasService: MascotasServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }
  ngOnInit(): void {
    this.mascotasService.getMascota(this.route.snapshot.paramMap.get('name')).subscribe(data => {
      this.mascota = data;
    });
  }

  eliminarMascota(id: any) {
    if (confirm('Seguro de eliminar la mascota: ' + id)) {
      this.mascotasService.deleteMascota(id).subscribe(data => {
        sessionStorage.setItem("mascotaEliminada",JSON.stringify(data));
        this.router.navigate(['mascotas']);
      });
    }
  }

  volverMascotas(){
    this.router.navigate(['mascotas']);
  }

}