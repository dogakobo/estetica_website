import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';
import {Router} from '@angular/router';
import { Usuario } from '../../../backend/productos/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  usuario={
    email:"",
    password:"",
    }
  
  constructor(private iniciosesionServicio:IniciosesionService, private Router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.iniciosesionServicio.login(this.usuario).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token',JSON.stringify(res));
      localStorage.setItem('usuario',res.name);
      localStorage.setItem('email',res.email);
      localStorage.setItem('tipo',res.tipo);
      if(res.tipo=="adm"){
        window.location.href=("http://localhost:4200/InicioPanel")
      }else{
        this.Router.navigate(['/Inicio'])
        location.reload();
      }

    },
    err=>{
      console.log(err);
      alert ("error al iniciar sesion");
    }
      );
  }
}

