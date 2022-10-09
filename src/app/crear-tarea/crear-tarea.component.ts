import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    keep(){
      console.log('Selecciono el botón keep...')
    }
}
