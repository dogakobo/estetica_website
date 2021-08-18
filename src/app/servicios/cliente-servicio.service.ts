import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {
  private UrlClien = 'http://localhost:3000/api/cliente'

  constructor(private http: HttpClient){ }


consultarTodo (){
  return this.http.get(this.UrlClien);
}

consultarClienNom(cliente: any){
  return this.http.post<any>(this.UrlClien + "/buscar-cli-nom", cliente);
}

agregarClient(cliente: any){
  return this.http.post<any>(this.UrlClien, cliente);
}

modificarClient(cliente: any){
  return this.http.post<any>(this.UrlClien, cliente);
}

eliminarClient(cliente: any){
  return this.http.post<any>(this.UrlClien + "/eliminar", cliente);
}
}
