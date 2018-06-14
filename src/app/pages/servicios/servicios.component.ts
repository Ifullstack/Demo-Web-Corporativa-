import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  consultoria: boolean;
  venturing: boolean;
  herramientas: boolean;
  tecno: boolean;
  constructor() { 
      this.consultoria = false;
      this.venturing = false;
      this.herramientas = false;
      this.tecno = false;
  }

  ngOnInit() {
  }
  activarConsultoria() {
    this.consultoria = !this.consultoria;
    this.tecno = false;
    this.venturing = false;
}
  activarVenturing() {
    this.venturing = !this.venturing;
    this.consultoria = false;
    this.tecno = false;
}
activarHerramientas() {
  this.herramientas = !this.herramientas;
}
activarTecno() {
  this.tecno = !this.tecno;
  this.consultoria = false;
  this.venturing = false;
}
}
