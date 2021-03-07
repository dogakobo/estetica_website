import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { NosostrosComponent } from './nosostros/nosostros.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
/*import {NosostrosComponent} from './nosostros/nosostros.component';*/

const routes: Routes = [
  {path: "Inicio",component: InicioComponent},
  {path: "InicioSesion",component: IniciosesionComponent},
 /* {path: "Nosostros",component: NosostrosComponent}*/
 {path: "Ubicacion", component: UbicacionComponent},
 {path: "Tendencias", component: TendenciasComponent},
{path: "Catalogo", component: CatalogoComponent},
{path: "Nosotros", component: NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
