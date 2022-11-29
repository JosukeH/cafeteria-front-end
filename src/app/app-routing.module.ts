import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';

import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasListComponent } from './recetas/recetas-list/recetas-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';

const appRoutes: Routes = [
  {path:'', component: InicioListComponent},
  {path:'Sesion', component: LoginComponent},
  {path:'Recetas',component: RecetasListComponent},
  {path:'Registros/Usuarios',component: UsuariosComponent},
  {path:'Registros/Ventas',component: VentasComponent},
  {path:'Registros/Productos',component: ProductosComponent},
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }