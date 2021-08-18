import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AddProductosComponent } from './admin/add-productos/add-productos.component';
import { CarritoComponent } from './cart/cart.component';
import {ClientesComponent} from './clientes/clientes.component';
import {CitasComponent} from './citas/citas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import {MenuAdminComponent} from './admin/menu-admin/menu-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {PerfilComponent} from './perfil/perfil.component';

const routes: Routes = [
	{path: "Inicio",component: InicioComponent},
	{path: "InicioSesion",component: IniciosesionComponent},
	{path: "Ubicacion", component: UbicacionComponent},
	{path: "Tendencias", component: TendenciasComponent},
	{path: "Catalogo", component: CatalogoComponent},
	{path: "Nosotros", component: NosotrosComponent},
	{path: "footer", component: FooterComponent},
	{path: "Productos", component: ProductosComponent},
	{path: "Registrar", component: RegistrarComponent},
	{path: "AgregarProducto", component: AddProductosComponent},
	{path: "Carrito", component :CarritoComponent},
	{path: "Clientes", component: ClientesComponent},
	{path: "Citas", component: CitasComponent},
	{path: "Pedidos", component: PedidosComponent},
	{path: "MenuAdmin", component: MenuAdminComponent},
	{path: "InicioPanel", component: DashboardComponent},
	{ path: '', pathMatch: 'full', redirectTo: 'Inicio' },
	{path: "Perfil", component: PerfilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

