import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedidos } from '../../../backend/productos/models/pedidos-modelo';
import { CarritoComponent } from '.././cart/cart.component';



@Injectable({
  providedIn: 'root'
})
export class PedidosService {
	Pedido: Pedidos[]=[];
	readonly URL = "http://localhost:3000/api/pedidos/";

  constructor(private http: HttpClient) { }

  crearPedido(pedido:Object){
  	return this.http.post(this.URL+"crear/", pedido);
  }

  getPedidos(){
  	return this.http.get(this.URL);
  }

  getPedidosHoy(){
  	return this.http.get(this.URL+"hoy/");
  }

}
