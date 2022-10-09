import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-lista-tarea',
  templateUrl: './crear-lista-tarea.component.html',
  styleUrls: ['./crear-lista-tarea.component.css']
})
export class CrearListaTareaComponent implements OnInit {

  nombre = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  keep(){
    console.log('Selecciono el botón keep...', this.nombre.value);
  }
}
