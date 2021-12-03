import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../../../backend/productos/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  usuario: any;
  tipo:any;
  private url = "https://pathyssthetic.herokuapp.com/api/iniciosesion/"

  constructor(private http:HttpClient , private Router: Router) { }

  login(usuario: Object){
    return this.http.post<any>(this.url+ 'iniciosesion/',usuario); 
  }

guardarUser(usuario: Object){
  return this.http.post<any>(this.url+'/', usuario);
}

eslogiado(){
  return !!localStorage.getItem('token');
}

cerrarsesion(){
  localStorage.clear();
  this.Router.navigate(['/Inicio'])
}

}
