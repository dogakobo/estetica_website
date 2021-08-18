import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Productos } from '../../../../backend/productos/models/producto';
import { ProductosService } from '../.././servicios/productos.service';
import {Router} from '@angular/router';
declare var M: any;

interface InputEvent extends Event {
  target: HTMLInputElement & EventTarget | any;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {
public busqueda: any;
  constructor(public productoService: ProductosService,private Router: Router) {
   }
  ngOnInit() {
    if(localStorage.getItem('tipo')=='adm'){

    }else{
      this.Router.navigate(['/Inicio'])
    }
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems);
    });
    this.getProductos();
  }

photoSelected: any | ArrayBuffer;
file: File = new File([""], "");

  limpar(form?: NgForm){
    if (form){
      form.reset();
      this.productoService.definirProducto = new Productos();
    }
  }
  
  aniadirProducto(form: NgForm){
        this.productoService.postProducto(form.value)
        .subscribe(res=>{
          console.log(res)
            M.toast({html: 'Producto guardado'})
            this.getProductos();
        });

        this.limpar(form);
      
    }

onPhotoSelected(event: InputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
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

  getProductos(){
    this.productoService.getProductos().subscribe(res=>{
      this.productoService.Producto = res as Productos[];
      console.log(res);
    });
  }

  putProducto(form: NgForm){
    const fd = new FormData();
    fd.append('_id', form.value._id);
    fd.append('nombre', form.value.nombre);
    fd.append('marca', form.value.marca);
    fd.append('descripcion', form.value.descripcion);
    fd.append('existencia', form.value.existencia);
    fd.append('precio', form.value.precio);
    fd.append('cantidad', form.value.cantidad);
    fd.append('visible', form.value.visible);
   if(typeof this.photoSelected=='undefined'){
     console.log("true");
      fd.append('imagen',form.value.imagen);
    }else{
      fd.append('file',this.file);
      console.log("false")
    }
    if(form.value._id){
      this.productoService.putProducto(fd,form.value._id)
      .subscribe(res =>{
            M.toast({html: 'Producto actualizado'});
            this.getProductos();
            
        });
        this.limpar(form);
      }else{ 
        M.toast({html: 'Error al editar'})
      }
  }
  
  editProducto(producto: Productos){
    this.productoService.definirProducto = producto;
  }

  deleteProducto(_id: String){
    if(confirm("¿Seguro que desea eliminar?")){
      this.productoService.deleteProducto(_id)
    .subscribe(res=>{
      this.getProductos();
    });
    }else{

    }
  }

  MSwitch(prod: Productos){
    this.productoService.putSwitch(prod).subscribe(res=>{
      if(prod.visible){
        M.toast({html: 'El producto ID: '+prod._id+' ha sido descatalogado'});
      }else{
        M.toast({html: 'El producto ID: '+prod._id+' ha sido catalogado'});
      }
    });
  }

}
