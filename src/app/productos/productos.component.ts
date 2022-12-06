import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../service/ingredientes.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos: any[] = []

  constructor(private _productoService: IngredientesService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this._productoService.getIngredientes().subscribe(data => {
      console.log(data);
      this.listProductos = data
      
    }, 
    error => {
      console.log(error);
      
    })
  }

}
