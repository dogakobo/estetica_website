import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../../servicios/iniciosesion.service';
import {Router} from '@angular/router';
declare var E: any;
declare var M: any;
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(public iniciosesionServicio:IniciosesionService,private Router: Router) { }

  ngOnInit(): void {
  	document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.collapsible');
    var instances = E.Collapsible.init(elems);


  });

    if(localStorage.getItem('usuario')){
      if(localStorage.getItem('tipo')=='adm'){
        this.iniciosesionServicio.tipo=String(localStorage.getItem('tipo'));
      }
    }
  }
}
