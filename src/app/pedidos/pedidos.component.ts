import { Component, OnInit } from '@angular/core';
import {PedidosService} from '../servicios/pedidos.service';
import { Pedidos } from '../../../backend/productos/models/pedidos-modelo';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
  	this.getPedidos();
  }
  getPedidos(){
	  this.pedidosService.getPedidos().subscribe(res=>{
	      this.pedidosService.Pedido = res as Pedidos[];
	    })
	}

}
