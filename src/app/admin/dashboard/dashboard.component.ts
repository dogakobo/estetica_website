import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ProductosService} from '../../servicios/productos.service';
import {IniciosesionService} from '../../servicios/iniciosesion.service';
import {Router} from '@angular/router';
import {PedidosService} from '../../servicios/pedidos.service';
import { Pedidos } from '../../../../backend/productos/models/pedidos-modelo';
import * as moment from 'moment';
moment.locale('es');
var mes: String[] = new Array(14);
var ventasDias: String[] = new Array(14);
var hoyfecha = moment().subtract(1, 'days').format('MMM D');
/*var dias: Number[] = new Array(14);*/
declare var E: any;
declare var M: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public iniciosesionServicio:IniciosesionService,public productosService: ProductosService,private Router: Router, public pedidosService: PedidosService) { }
  usuariosTotal: String = "";
  usuariosNews: String = "";
  citasHoy:String = "";
  gananciasMes: Number=0;
  pedidosMes:String = "";

  type:any;
  data:any;
  options:any;
  cargando=true;


  typeVentas:any;
  dataVentas:any;
  optionsVentas:any;

  typeCitas:any;
  dataCitas:any;
  optionsCitas:any;


  ngOnInit(): void {
  	document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.collapsible');
    var instances = E.Collapsible.init(elems);
  });

    if(localStorage.getItem('tipo')=='adm'){
      this.iniciosesionServicio.tipo=String(localStorage.getItem('tipo'));

    }else{
      this.Router.navigate(['/Inicio'])
    }
    
    this.dashboard();
    
    
  }

  daschborarChart(result:any){
    this.type = 'line';
    this.data = {
      labels: mes,
      datasets: [
        {     
          label: "Registros",
          fill:false,
          backgroundColor: 'white',
          borderColor: '#ffffff',
          tension:0.1,
          data: result
        },
      ]
    };

      this.options = {
        fill: true,
        beginAtZero: false,
        legend: {
          display: false,
      },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ 
              display: true,
              gridLines: {
                display:false,

              },
              ticks: {
                fontColor: '#efefef'
              },
                  }],
          yAxes: [
            {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                fontColor: '#efefef'
              },
                      display: true,
                      gridLines: {
                          display:true,
                          color: '#b0bec5'
                      }   
                  }],
      }
      }
  }

  daschborarChartCitas(result:any){
    this.typeCitas = 'doughnut';
    this.dataCitas = {
      labels: [
        'Cortes',
        'Tintes'
      ],
      datasets: [
        {     
          label: "Citas hoy",
          fill:false,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],
          data: result
        },
      ]
    };

      this.optionsCitas = {
      }
  }

  daschborarChartVentas(ganancias:any, pedidos:any){
    this.typeVentas = 'bar';
    this.dataVentas = {
      labels: ventasDias,
      datasets: [
        { 
          type: "line",
          label: "Ganancias",
          fill:false,
          backgroundColor: '#3949ab',
          borderColor: '#3949ab',
          tension:0.1,
          data: ganancias
        },
        {     
          label: "Pedidos",
          fill:false,
          backgroundColor: '#e91e63',
          borderColor: '#e91e63',
          data: pedidos
        },
        
      ]
    };

      this.optionsVentas = {
        fill: true,
        beginAtZero: true,
        legend: {
          display: true
      },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            { display: true,
                      gridLines: {
                          display:false
                      }
                  }],
          yAxes: [
            {
              beginAtZero: true,
                      display: true,
                      gridLines: {
                          display:false
                      }   
                  }],
                  y:{
                    min:0,
                    max:100
                  }
      }
      }
  }


  async dashboard(){
    for(var i=0; i<=14;i++){
      mes[i]=moment().subtract(14-i, 'days').format('MMM D');
    }
    for(var i=0; i<=29;i++){
      ventasDias[i]=moment().subtract(29-i, 'days').format('MMM D');
    }

    this.pedidosService.getPedidosHoy().subscribe(res=>{
      this.pedidosService.Pedido = res as Pedidos[];
      console.log();
    })

  	this.productosService.dashboard().subscribe(data=>{
  		const dashboard: any[] = Array.of(data);
  		this.usuariosTotal = dashboard[0].totalusers;
      this.usuariosNews = dashboard[0].news;
      this.gananciasMes = dashboard[0].gananciasMes;
      this.citasHoy = dashboard[0].citasHoy;
      this.pedidosMes = dashboard[0].pedidosMes;
      this.daschborarChart(dashboard[0].dias);
      this.daschborarChartCitas(dashboard[0].servicios);
      this.daschborarChartVentas(dashboard[0].gananciasPedidos, dashboard[0].cantPedidos);
      this.cargando=false;
  	});
  }

}
