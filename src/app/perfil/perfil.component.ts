import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PedidosComponent} from '../pedidos/pedidos.component';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;
  constructor(private pedidosservice: PedidosService) { }

  ngOnInit(): void {
    this.consultarTodo();
  }

  async consultarTodo(){
    await this.pedidosservice.getPedidos().subscribe(
      res =>{ this.usuario = res; console.log(res)}, 
      err => console.log(err)
      );
  }
}
