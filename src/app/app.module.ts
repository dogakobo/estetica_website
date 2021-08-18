import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IniciosesionService } from "./servicios/iniciosesion.service"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddProductosComponent } from './admin/add-productos/add-productos.component';
import { CitasComponent } from './citas/citas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    IniciosesionComponent,
    UbicacionComponent,
    CatalogoComponent,
    NosotrosComponent,
    FooterComponent,
    MenuAdminComponent,
    ProductosComponent,
    RegistrarComponent,
    AddProductosComponent,
    CitasComponent,
    ClientesComponent,
    PedidosComponent,
    DashboardComponent,
    PerfilComponent,
    CarritoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatTabsModule,
    ChartModule,

    
  ],
  providers: [
    IniciosesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
