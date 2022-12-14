// import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/service/ventas.service';
import { IInicio } from '../inicio';

@Component({
  selector: 'app-inicio-list',
  templateUrl: './inicio-list.component.html',
  styleUrls: ['./inicio-list.component.css']
})
export class InicioListComponent implements OnInit {
  constructor(private _ventaService: VentasService){}

  selectProductos: any[] = []
  counter: number = 0
  total: number = 0

  listFilter:string='';
  catFilter:string='';
  idFilter:string='';
  filtroN:string='';
  CurrentDate = new Date();

  displaye:string='none';

  addToList(prod){
    this.selectProductos.push(prod)
    console.log(this.selectProductos);
    this.total += prod.precio
    this.counter++
  }

  clearPedido(){
    this.selectProductos = []
    this.counter= 0
    this.total = 0
  }

  filtroId(nombre:string){
    this.filtroN = nombre;
    this.idFilter = this.filtroN;
    this.displaye = 'block';
  }

  sendPedido(){
    console.log(this.selectProductos);
    const arrOfIds = this.selectProductos.map(prod => {
      if(prod._id){
        return {_id: prod._id}
      }else{
        return {_id:"638d363a0f2e2242eac441e7" }
      }

    })

    const postBody = {
      total: this.total,
      productos: arrOfIds
    }

    console.log(postBody);
    

    this._ventaService.postVenta(postBody).subscribe(
      res => {
        console.log('res')
        console.log(res)
        // this._loginServe.saveUser(res)
        this.clearPedido()
      },
      err => {
        // this.error = err.error
        console.log(err)
      },
      () => console.log('fin')
    
      )

  }

  ocultar(){
    this.displaye = 'none';
  }

  user: any = {}
  userP: any =  {}
  

  ngOnInit(): void {
    this.user = localStorage.getItem('user') 
    this.userP = JSON.parse(this.user)
    console.log(this.userP);

  }

  
  

  inici:IInicio[]=[
    {
      "_id": "63916065d0493ac73888d953",
      "id":1,
      "nombre":'Menta Helada Mocha',
      "precio":118,
      "Tipo":'Fr??o',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/01.webp'
    },
    {
      "_id": "63916361d0493ac73888d970",
      "id":2,
      "nombre":'Nuez Moscada Latte',
      "precio":114,
      "Tipo":'Caliente',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/02.webp'
    },
    // {
    //   "id":3,
    //   "nombre":'Maple Caf?? au Lait',
    //   "precio":73,
    //   "Tipo":'Caliente',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/03.webp'
    // },
    // {
    //   "id":4,
    //   "nombre":'Iced Caramel Latte y Crema de Vainilla',
    //   "precio":73,
    //   "Tipo":'Fr??o',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/04.webp'
    // },
    // {
    //   "id":5,
    //   "nombre":'Salted Caramel Espresso',
    //   "precio":106,
    //   "Tipo":'Caliente',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/05.webp'
    // },
    {
      "_id": "63916526d0493ac73888d975",
      "id":6,
      "nombre":'Espumante Espresso con Menta',
      "precio":77,
      "Tipo":'Fr??o',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/06.webp'
    },
    {
      "id":7,
      "_id":"638d363a0f2e2242eac441e7",
      "nombre":'Caf?? Americano',
      "precio":60,
      "Tipo":'Caliente',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/07.webp'
    },
    // {
    //   "id":8,
    //   "nombre":'Caramel Honey Latte',
    //   "precio":111,
    //   "Tipo":'Caliente',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/08.webp'
    // },
    // {
    //   "id":9,
    //   "nombre":'Iced Caramel Macchiato',
    //   "precio":88,
    //   "Tipo":'Fr??o',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/09.webp'
    // },
    // {
    //   "id":10,
    //   "nombre":'C??rcuma Dorado Latte',
    //   "precio":115,
    //   "Tipo":'Caliente',
    //   "Categoria":'Caf??',
    //   "ImagenUrl":'./assets/medios/Recetas/10.webp'
    // },
    {
      "_id": "63914bd44f0f09c98b6fad8b",
      "id":11,
      "nombre":'Cappuccino',
      "precio":90,
      "Tipo":'Caliente',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/11.webp'
    },
    {
      "_id": '63916639d0493ac73888d981',
      "id":12,
      "nombre":'Caff?? Mocha',
      "precio":107,
      "Tipo":'Caliente',
      "Categoria":'Caf??',
      "ImagenUrl":'./assets/medios/Recetas/12.webp'
    },
    {
      "_id": "63916752d0493ac73888d9ab",
      "id":13,
      "nombre":'Infusi??n de T?? Verde a la C??rcuma',
      "precio":74,
      "Tipo":'Fr??o',
      "Categoria":'T??',
      "ImagenUrl":'./assets/medios/Recetas/13.png'
    },
    {
      "_id": "639167b1d0493ac73888d9b2",
      "id":14,
      "nombre":'Infusi??n de Manzana Canela',
      "precio":76,
      "Tipo":'Caliente',
      "Categoria":'T??',
      "ImagenUrl":'./assets/medios/Recetas/14.png'
    },
    {
      "_id": "63916809d0493ac73888d9b9",
      "id":15,
      "nombre":'T?? Helado de lim??n y jengibre',
      "precio":75,
      "Tipo":'Fr??o',
      "Categoria":'T??',
      "ImagenUrl":'./assets/medios/Recetas/15.png'
    }
  ]

}