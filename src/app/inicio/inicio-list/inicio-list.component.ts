import { Component, OnInit } from '@angular/core';
import { IInicio } from '../inicio';

@Component({
  selector: 'app-inicio-list',
  templateUrl: './inicio-list.component.html',
  styleUrls: ['./inicio-list.component.css']
})
export class InicioListComponent implements OnInit {

  listFilter:string='';
  catFilter:string='';
  idFilter:string='';
  filtroN:string='';

  CurrentDate = new Date();

  displaye:string='none';

  filtroId(nombre:string){
    this.filtroN = nombre;
    this.idFilter = this.filtroN;
    this.displaye = 'block';
  }

  ocultar(){
    this.displaye = 'none';
  }

  constructor() { }

  ngOnInit(): void {
  }

  inici:IInicio[]=[
    {
      "recetaId":1,
      "Nombre":'Menta Helada Mocha',
      "Precio":118,
      "Tipo":'Frío',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/01.webp'
    },
    {
      "recetaId":2,
      "Nombre":'Nuez Moscada Latte',
      "Precio":114,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/02.webp'
    },
    {
      "recetaId":3,
      "Nombre":'Maple Café au Lait',
      "Precio":73,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/03.webp'
    },
    {
      "recetaId":4,
      "Nombre":'Iced Caramel Latte y Crema de Vainilla',
      "Precio":73,
      "Tipo":'Frío',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/04.webp'
    },
    {
      "recetaId":5,
      "Nombre":'Salted Caramel Espresso',
      "Precio":106,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/05.webp'
    },
    {
      "recetaId":6,
      "Nombre":'Espumante Espresso con Menta',
      "Precio":77,
      "Tipo":'Frío',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/06.webp'
    },
    {
      "recetaId":7,
      "Nombre":'Café Americano',
      "Precio":60,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/07.webp'
    },
    {
      "recetaId":8,
      "Nombre":'Caramel Honey Latte',
      "Precio":111,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/08.webp'
    },
    {
      "recetaId":9,
      "Nombre":'Iced Caramel Macchiato',
      "Precio":88,
      "Tipo":'Frío',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/09.webp'
    },
    {
      "recetaId":10,
      "Nombre":'Cúrcuma Dorado Latte',
      "Precio":115,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/10.webp'
    },
    {
      "recetaId":11,
      "Nombre":'Cappuccino',
      "Precio":90,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/11.webp'
    },
    {
      "recetaId":12,
      "Nombre":'Caffé Mocha',
      "Precio":107,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "ImagenUrl":'./assets/medios/Recetas/12.webp'
    },
    {
      "recetaId":13,
      "Nombre":'Infusión de Té Verde a la Cúrcuma',
      "Precio":74,
      "Tipo":'Frío',
      "Categoria":'Té',
      "ImagenUrl":'./assets/medios/Recetas/13.png'
    },
    {
      "recetaId":14,
      "Nombre":'Infusión de Manzana Canela',
      "Precio":76,
      "Tipo":'Caliente',
      "Categoria":'Té',
      "ImagenUrl":'./assets/medios/Recetas/14.png'
    },
    {
      "recetaId":15,
      "Nombre":'Té Helado de limón y jengibre',
      "Precio":75,
      "Tipo":'Frío',
      "Categoria":'Té',
      "ImagenUrl":'./assets/medios/Recetas/15.png'
    }
  ]

}