import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';
import {Router} from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public iniciosesionServicio:IniciosesionService, private Router: Router) { }

  ngOnInit(): void {
  	var instance = M.Tabs.init();
    console.log(this.iniciosesionServicio.usuario);
    if (localStorage.getItem('token')){
      this.iniciosesionServicio.usuario=String(localStorage.getItem('usuario'));
    }else{
      this.iniciosesionServicio.usuario=="";
    }
  }

  cerrarsesion(){
    localStorage.clear();
    location.reload();
  }

}
