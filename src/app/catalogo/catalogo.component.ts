import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Productos } from '../../../backend/productos/models/producto';
import { ProductosService } from '.././servicios/productos.service';
import { CarritoService } from '../servicios/carrito.service';
import { Item } from '../interface/item';

declare var M: any;
declare var A: any;


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [ProductosService]
})
export class CatalogoComponent implements OnInit {
    private selectedproduct = {};

constructor(public productoService: ProductosService,public carritoService: CarritoService) { }
  public i: any=0;
  public check: any = false;
  public busqueda: any;
  listarProductos: any[] = [];
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = A.Materialbox.init(elems);
    });
    this.getProductos();
  }
 	


  limpar(form?: NgForm){
    if (form){
      form.reset();
      this.productoService.definirProducto = new Productos();
    }
  }

  getProductos(){
    this.productoService.getProductosC()
    .subscribe(res=>{
      this.productoService.Producto = res as Productos[];

    });
  }

  buscar(busqueda: String){
    if(busqueda==""){
      this.getProductos();
    }else{
    this.productoService.buscarProductos(busqueda)
            .subscribe(res=>{
            this.productoService.Producto = res as Productos[];
          });
    }
  }
  
  listarMarca(marca: String){  
      if(this.check==false){
          this.check = true;
            this.productoService.getMarca(marca)
            .subscribe(res=>{
            this.productoService.Producto = res as Productos[];
            console.log(res);
          });
      }else{
        this.getProductos();
        this.check = false;
      }
    }

    public addCart(product:Item)
    {
      M.toast({html: 'Producto añadido'});
      this.carritoService.changeCart(product);
    }

  }