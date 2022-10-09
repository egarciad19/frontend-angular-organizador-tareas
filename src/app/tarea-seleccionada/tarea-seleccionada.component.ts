import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tarea-seleccionada',
  templateUrl: './tarea-seleccionada.component.html',
  styleUrls: ['./tarea-seleccionada.component.css']
})
export class TareaSeleccionadaComponent implements OnChanges {

  
   
  @Input() idTareaSeleccionada!:number; 
  @Input() nombreTareaSeleccionada!:string;
  @Input() nombreListaTareaSeleccionada!:string; 

  //@Input() tablaActividades!:boolean; 
  //@Input() actividadSeleccionada!:boolean;

  tablaActividades = true; 
  actividadSeleccionada = false;
  noActividades = false; 
  
  panelOpenState = false;

  nombreListadoActividad!: string;
  listaActividades = [
    {id: 1, actividad: 'Realizar investgación', estado: false},
    {id: 2, actividad: 'Leer pagnias 1-10', estado: false},
    {id: 3, actividad: 'Realiar sítesis del tema', estado: false},
    {id: 4, actividad: 'Realizar trabajo escrito', estado: false},
  ]

  actividadCompletada:boolean = false; 
  nombreActividadCompletada!:string; 
  porcentaje = 0.0; 

  displayedColumns: string[] = ['position', 'lista', 'CantidadActividade', 'porcentaje'];
  dataSource = new Array;

  constructor(private tareaService: TareaService) { }

  ngOnChanges(changes: SimpleChanges): void {
   const idTareaSeleccionadaValue = changes['idTareaSeleccionada'];
    if(idTareaSeleccionadaValue.currentValue !== idTareaSeleccionadaValue.previousValue){
      this.tablaActividades = true; 
      this.actividadSeleccionada = false;
      this.dataSource = this.tareaService.getListaActividades(this.idTareaSeleccionada);
      
      /*
      this.tareaService.getListas(1).subscribe(t =>{
        console.log('PROBANDO MICROS', t);
      })
        */

      if(this.dataSource.length > 0){
        this.tablaActividades = true; 
        this.noActividades = false;  
      } else{
        this.tablaActividades = false;
        this.noActividades = true;  
      }
    }
  }


  
  


  asignarDatosSeleccionados(idT:number, nombreT:string, nombreL:string){
    console.log('id: ', idT)
    console.log('nombreT: ', nombreT)
    console.log('nombreL: ', nombreL)

    this.asignarRecibidos(idT, nombreT, nombreL);

  }

  asignarRecibidos(idT:number, nombreT:string, nombreL:string){
    
    this.idTareaSeleccionada = idT;
    this.nombreTareaSeleccionada = 'nombreT'; 
    this.nombreListaTareaSeleccionada = 'nombreL'; 
  }

  verListadoActividad(idlista:number){
    this.actividadSeleccionada = true; 
    this.tablaActividades = false; 

    for(let i in this.dataSource){
      if(this.dataSource[i].id == idlista){
        this.nombreListadoActividad = this.dataSource[i].lista;
        break;
      }
    }


  }

  verTablaActividades(){
    this.actividadSeleccionada = false;
    this.tablaActividades = true; 
  }

  completarActividad(idActividad:number){
    let totalCompletados = 0; 
    let total = this.listaActividades.length;
    for(let i in this.listaActividades){
      if(this.listaActividades[i].id == idActividad){
        if(this.listaActividades[i].estado == true){
          this.listaActividades[i].estado = false;          
        } else {
          this.listaActividades[i].estado = true;  
        }
        this.actividadCompletada = this.listaActividades[i].estado; 
        this.nombreActividadCompletada = this.listaActividades[i].actividad;
      }
    }
    for(let i in this.listaActividades){
      if(this.listaActividades[i].estado == true){
        totalCompletados++;
      }
    }
    this.porcentaje = totalCompletados/total; 
  }

}
