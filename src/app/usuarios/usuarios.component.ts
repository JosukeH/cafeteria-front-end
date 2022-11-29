import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayVer:string="none";
  displayEdit:string="none";
  displayBorr:string="none";

  constructor() { }

  ngOnInit(): void {
  }

  verUser(){
    this.displayVer="block";
    this.displayEdit="none";
    this.displayBorr="none";
  }

  editUser(){
    this.displayVer="none";
    this.displayEdit="block";
    this.displayBorr="none";
  }

  borrarUser(){
    this.displayVer="none";
    this.displayEdit="none";
    this.displayBorr="block";
  }
}
