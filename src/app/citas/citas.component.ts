import { Component, OnInit } from '@angular/core';
import {CitasSevicioService} from '../servicios/citas-sevicio.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
 

  constructor(private citaService: CitasSevicioService) { }
  citas: any;

  ngOnInit(): void {
    this.consultarTodo();
  }

  async consultarTodo(){
    await this.citaService.consultarTodo().subscribe(res => {
      this.citas = res;
    });
  }

}
