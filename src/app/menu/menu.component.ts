import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  display:string="none";

  constructor() { }

  ngOnInit(): void {
  }

  aparece(){
      this.display="block";
  }

  desaparece(){
    this.display="none";
  }

}
