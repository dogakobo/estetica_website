import { Component } from '@angular/core';
import {CarritoService} from './servicios/carrito.service';
import { Item } from './interface/item';

declare var M: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Pathys Esthetic";
  totalitem=0;
  public openCart:boolean = false;
  constructor(public carritoServicio: CarritoService){}
  public cart(){ //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }

}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});