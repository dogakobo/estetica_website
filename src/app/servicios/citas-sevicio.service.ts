import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasSevicioService {
  private UrlCita = 'https://pathyssthetic.herokuapp.com/api/cita'

  constructor(private http: HttpClient) { }

  consultarTodo() {
    return this.http.get(this.UrlCita);
  }

  
}
