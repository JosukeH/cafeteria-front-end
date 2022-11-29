import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  displayVer:string="none";

  constructor() { }

  ngOnInit(): void {
  }

  verVenta(){
    this.displayVer="block";
  }

}
