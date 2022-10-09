import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CrearTareaComponent } from '../crear-tarea/crear-tarea.component';
import { ActivatedRoute } from '@angular/router';
import { TableroService } from '../services/tablero.service';
import { CrearListaTareaComponent } from '../crear-lista-tarea/crear-lista-tarea.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablero-seleccionado',
  templateUrl: './tablero-seleccionado.component.html',
  styleUrls: ['./tablero-seleccionado.component.css']
})
export class TableroSeleccionadoComponent implements OnInit {
 
  
  //acceso al textArea de comentario
  @ViewChild("comentario", { static: false })
  //referencia al input
  InputVar!: ElementRef;

  verTarea = false; 
  panelOpenState = false;
  idTablero : number = 0; 
  tablero : any = {};
  comentando = false; 

  //Tarea Seleccionada:
  idTarea!:number; 
  nombreTarea!:string; 
  nombreListadoTarea!:string
  detalleTarea!:boolean; 
  detalleActividad!:boolean; 

  tareas = [
    {id:1, nombre:"Tarea 1"},
    {id:2, nombre:"Tarea 2"},
    {id:3, nombre:"Tarea 3"}
  ]

  listaTareas = [
    {
      id:1, 
      nombreListado:"Listado 1", 
      tareas:[
        {
          id:1, 
          nombre:"Tarea 1"
        },
        {
          id:2, 
          nombre:"Tarea 2"
        },
        {
          id:3,
          nombre:"Tarea 3"

        }
      ]
    },
    {
      id:2, 
      nombreListado:"ListadoTareas 2", 
      tareas:[
        {
          id:11, 
          nombre:"Tarea 11"
        },
        {
          id:22, 
          nombre:"Tarea 22"
        },
        {
          id:33,
          nombre:"Tarea 33"
        }
      ]
    },
    

  ]

  constructor(private tableroService: TableroService, public dialog: MatDialog, 
    private route: ActivatedRoute, private router: Router) { 
    /*
    this.route.params.subscribe(params => {
      this.idTablero = params['id'];
      console.log(this.idTablero);
    });

    this.tableroService.getTableroId(this.idTablero).subscribe(t =>{
      this.tablero = t; 
    });
    */
  }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(CrearListaTareaComponent);

  
  }

  crearTarea(){
    
  }

  verTareaSeleccionada(id:number, ntarea:string, jListadoT:string){
    this.verTarea = true; 
    this.idTarea = id;
    this.nombreTarea = ntarea; 
    this.nombreListadoTarea = jListadoT;
  }

  agregandoComentario(){
    this.comentando = true; 
  }

  ocultarBotonComentario(){
    this.comentando = false; 
  }

  limpiarComentario(){
    this.InputVar.nativeElement.value = "";
  }

}


