import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';
import {Router} from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

usuario: any = {name: "",
email: "",
password: "",
password2: ""}

  constructor(private IniciosesionService: IniciosesionService, private Router: Router) { }

  ngOnInit(): void {
    var instance = M.Tabs.init();
  }

guardarUser(){
  if(this.usuario.password == this.usuario.password2){
    this.IniciosesionService.guardarUser(this.usuario).subscribe(res =>{
      if(res==true){
        alert("El correo ya está en uso");
      }else{
        localStorage.setItem('token',JSON.stringify(res));
        localStorage.setItem('usuario',res.name);
        localStorage.setItem('tipo',res.tipo);
        location.reload();
      }
    }, err=> console.log(err));
  }else{
    alert("Las contraseñas deben coincidir");
  }
}



}
