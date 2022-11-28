import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RecetasListComponent } from './recetas/recetas-list/recetas-list.component';
import { CatFiltroPipe, IdFiltroPipe, RecetaFiltroPipe } from './recetas/recetas-filtro.pipe';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';
import { CatsFiltroPipe, RecetasFiltroPipe } from './inicio/inicio-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RecetasListComponent,
    RecetaFiltroPipe,
    CatFiltroPipe,
    IdFiltroPipe,
    InicioListComponent,
    RecetasFiltroPipe,
    CatsFiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
