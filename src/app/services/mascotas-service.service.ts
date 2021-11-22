import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MascotasServiceService {
  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get('http://localhost:5000/pet');
  }

  getMascota(id: any) {
    return this.http.get('http://localhost:5000/pet/' + id);
  }

  insertMascota(data: any): Observable<any> {
    let json = JSON.stringify(data);
    return this.http.post('http://localhost:5000/pet', json, httpOptions) ;
  }

  deleteMascota(id:any) {
    return this.http.delete('http://localhost:5000/pet/'+id, httpOptions);
  }

}
