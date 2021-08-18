import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CarritoService } from '../servicios/carrito.service';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interface/item';
import { Domicilio } from '../interface/domicilio';
import { PedidosService } from '.././servicios/pedidos.service';
import {IniciosesionService} from '../servicios/iniciosesion.service';
declare var paypal:any;
declare var M: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CarritoComponent implements AfterViewChecked {
  domicilio={
    nombre:"",
    apellido:"",
    calle:"",
    colonia:"",
    num_int: "",
    num_ext: "",
    municipio: "",
    estado: "",
    cp:""
  };
   form=false;
  public items:Item[]=[{
    _id:"",
    nombre: "",
    marca: "",
    descripcion: "",
    existencia: 0,
    imagen: "",
    precio: 0,
    visible: false,
    cantidad: 0
  }];
  addScript: boolean=false;
  finalAmount: number=1;
  paypalConfig = {
    env:'sandbox',
    client:{
      sandbox: 'AfuKfj57ntftF7APlxavDfr8MUuq7ejbRD1L6rxSCvs1mMJ2XXMzLMUHe8R8-b-D_yj9WUsc32bN205D'
    },
    commit: true,
    payment: (data:any, actions:any)=>{
      return actions.payment.create({
        payment: {
          transactions: [{
            amount: {total: this.totalPrice, currency: 'MXN'}
          }]
        }
      })
    },
    onAuthorize: (data:any, actions:any)=> {
      return actions.payment.execute().then(()=>{
        this.crearPedido();
      })
    }
  }
  public objetos:any;
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CarritoService,public pedidosService:PedidosService, public iniciosesionServicio:IniciosesionService) { }
 
  ngAfterViewChecked(): void {
   if(!this.addScript){
     this.addPaypalScript().then(()=>{
       paypal.Button.render(this.paypalConfig, '#checkout')
     })
   }
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0) +90;
      }
    })
  }
  mostrarform(){
    console.log(this.items)
    this.form=true;
  }
  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve,reject)=>{
      let scripttagEelemnt = document.createElement('script');
      scripttagEelemnt.src='http://www.paypalobjects.com/api/checkout.js';
      scripttagEelemnt.onload =resolve;
      document.body.appendChild(scripttagEelemnt);
    })
  }

/*  pago(form: NgForm){
    this.domicilio = form;
    console.log(this.domicilio)
  }*/

  crearPedido(){
    var pedido={
      _id: Math.random(),
      productos: this.items,
      domicilio: this.domicilio,
      total: this.totalPrice,
      usuario: localStorage.getItem("email"),
    };
    this.pedidosService.crearPedido(pedido).subscribe(res=>{
      location.reload();
    })
  }

  public remove(producto:Item)
  {
      this._cartService.removeElementCart(producto);
  }
}