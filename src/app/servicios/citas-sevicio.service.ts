import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasSevicioService {
  private UrlCita = 'http://localhost:3000/api/cita'

  constructor(private http: HttpClient) { }

  consultarTodo() {
    return this.http.get(this.UrlCita);
  }

  
}
