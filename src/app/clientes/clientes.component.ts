import { Component, OnInit } from '@angular/core';

//importar servicio
import { ClienteServicioService} from '../servicios/cliente-servicio.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  

  //cambiar valor con la busqueda
  clientesM = {
    _id : "",
    nombre : "",
    apellido : "",
    telefono : "",
    correo : "",
    nomUsuario : "",
    domicilio: ""
  }


  //variable donde guarda todo
  clientes: any;


  constructor(private clientesServ : ClienteServicioService) { }

  ngOnInit(): void {
    this.consultarTodo();
  }

  async consultarTodo(){
    await this.clientesServ.consultarTodo().subscribe(
      res =>{ this.clientes = res; console.log(res)}, 
      err => console.log(err)
      );
  }

  async consultar(){
   
    await this.clientesServ.consultarClienNom(this.clientesM).subscribe(async res => {
     this.clientes = res;
    
     //si no hay resultados que consulte todo de nuevo
     if (this.clientes.length == 0) {
       this.consultarTodo();
     }
    },
    err => this.consultarTodo());
  }


}
