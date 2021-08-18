import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../../../backend/productos/models/producto';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ProductosComponent } from '../admin/productos/productos.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  definirProducto: Productos;
  Producto: any[] = []; 
  readonly URL = "http://localhost:3000/api/producto/";

  constructor(private http: HttpClient) {
    this.definirProducto = new Productos();
  }

  getProductos(){
    return this.http.get(this.URL);
  }

  buscarProductos(busqueda: String){
    return this.http.get(this.URL+'buscar/'+ busqueda);
  }

  dashboard(){
    return this.http.get(this.URL+'dashboard');
  }

  getProductosC(){
    return this.http.get(this.URL+'catalogo/');
  }

  postProducto(producto: FormData){
    return this.http.post(this.URL, producto);
  }

  putProducto(producto: FormData,_id:String){
    return this.http.put(this.URL + `/${_id}`, producto);
  }

  deleteProducto(_id: String){
    return this.http.delete(this.URL + `/${_id}`);
  }

  getMarca(marca: String){
    return this.http.get(this.URL + '/marca/'+ marca);
  }

  getMaxId(){
    return this.http.get(this.URL + 'maxid/');
  }

  putSwitch(producto: Productos){
    return this.http.put(this.URL + `switch/${producto._id}`, producto);
  }
}
