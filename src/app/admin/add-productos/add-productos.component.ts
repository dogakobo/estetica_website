import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Productos } from '../../../../backend/productos/models/producto';
import { ProductosService } from '../.././servicios/productos.service';
import {IniciosesionService} from '../.././servicios/iniciosesion.service';
import {Router} from '@angular/router';

declare var M: any;

interface InputEvent extends Event {
  target: HTMLInputElement & EventTarget | any;
}

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css'],
  providers: [ProductosService]
})
export class AddProductosComponent implements OnInit {

  constructor(public productoService: ProductosService, public iniciosesionServicio:IniciosesionService, private Router: Router) {}
  photoSelected: any | ArrayBuffer;
  file: File = new File([""], "");
  file2: File = new File([""], "");
  maxid: any;
  ngOnInit(): void {
    if(this.maxid==null){
      this.maxid=1;
    }
  	document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems);
    });

    this.id();
    if(localStorage.getItem('tipo')=='adm'){

    }else{
      this.Router.navigate(['/Inicio'])
    }
  }

  id(){
    this.productoService.getMaxId().subscribe(res=>{
      var maxid = res as Productos[];
      this.maxid = maxid[0]._id+1;
    });
  }

  limpar(form?: NgForm){
    if (form){
      form.reset();
      this.productoService.definirProducto = new Productos();
      this.photoSelected = '../../../assets/img/no_img.jpg';
      this.maxid++;
    }
  }

  createPhoto(form: NgForm, photo: File) {
    const fd = new FormData();
    fd.append('_id', this.maxid);
    fd.append('nombre', form.value.nombre);
    fd.append('marca', form.value.marca);
    fd.append('descripcion', form.value.descripcion);
    fd.append('existencia', form.value.existencia);
    fd.append('precio', form.value.precio);
    fd.append('cantidad', form.value.cantidad);
    fd.append('visible', form.value.visible);
    fd.append('imagen',photo);
    return fd;
  }

  onPhotoSelected(event: InputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      console.log(this.photoSelected);
      reader.readAsDataURL(this.file);
    }
  }

  aniadirProducto(form: NgForm){
    if(form.value.nombre=="" || form.value.marca=="" || form.value.descripcion=="" || form.value.existencia=="" || form.value.precio=="" || form.value.cantidad==""|| form.value.visible==null || this.file==null){
      M.toast({html: 'Todos los campos son requeridos'})
    }else{
        this.productoService.postProducto(this.createPhoto(form,this.file))
        .subscribe(res=>{
            M.toast({html: 'Producto guardado'})
        });


        this.limpar(form);
      
    }
  }
}
