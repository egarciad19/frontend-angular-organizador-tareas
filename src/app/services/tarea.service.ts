import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas = [
    {
      id: 1,
      nombreTarea: "Tarea 1",
      ListaActividades: [
        {
          id: 1,
          lista: 'ListaActividades 1',
          CantidadActividade: 4,
          porcentaje: '50%',
          detalleLista: [
            { id: 1, actividad: 'Realizar Investigación', estado: false },
            { id: 2, actividad: 'Leer pagnias 1-10', estado: false },
            { id: 3, actividad: 'Realizar sítesis del tema', estado: false },
            { id: 4, actividad: 'Realizar trabajo escrito', estado: false },
          ]
        },
        {
          id: 2,
          lista: 'ListaActividades 2',
          CantidadActividade: 3,
          porcentaje: '0%',
          detalleLista: [
            { id: 1, actividad: 'Completar Investigación', estado: false },
            { id: 2, actividad: 'Estudiar libro...', estado: false },
            { id: 3, actividad: 'Practicar tema', estado: false }
          ]
        },
        {
          id: 3,
          lista: 'ListaActividades 3',
          CantidadActividade: 2,
          porcentaje: '100%',
          detalleLista: [
            { id: 1, actividad: 'Crear Mapa Conceptual', estado: false },
            { id: 2, actividad: 'Crear Infografía', estado: false }
          ]
        }
      ]
    },
    {
      id: 33,
      nombreTarea: "Tarea 2",
      ListaActividades: [
        {
          id: 1,
          lista: 'ListaActividades 1',
          CantidadActividade: 2,
          porcentaje: '70%',
          detalleLista: [
            { id: 1, actividad: 'Realizar Investigación', estado: false },
            { id: 2, actividad: 'Leer pagnias 1-10', estado: false }
          ]
        },
        {
          id: 2,
          lista: 'ListaActividades 2',
          CantidadActividade: 5,
          porcentaje: '33%',
          detalleLista: [
            { id: 1, actividad: 'Completar Investigación', estado: false },
            { id: 2, actividad: 'Estudiar libro...', estado: false },
            { id: 3, actividad: 'Practicar tema', estado: false },
            { id: 4, actividad: 'Realizar sítesis del tema', estado: false },
            { id: 5, actividad: 'Realizar trabajo escrito', estado: false },
          ]
        },
        {
          id: 3,
          lista: 'ListaActividades 3',
          CantidadActividade: 3,
          porcentaje: '50%',
          detalleLista: [
            { id: 1, actividad: 'Crear Mapa Conceptual', estado: false },
            { id: 2, actividad: 'Crear Infografía', estado: false },
            { id: 3, actividad: 'Realizar trabajo escrito', estado: false },
          ]
        },
        {
          id: 4,
          lista: 'ListaActividades 4',
          CantidadActividade: 4,
          porcentaje: '50%',
          detalleLista: [
            { id: 1, actividad: 'Crear Mapa Conceptual', estado: false },
            { id: 2, actividad: 'Crear Infografía', estado: false },
            { id: 3, actividad: 'Realizar trabajo escrito', estado: false },
            { id: 4, actividad: 'Realizar sítesis del tema', estado: false }
          ]
        }
      ]
    }
  ]


  constructor(private http: HttpClient) { }

  getTarea() {
    return this.tareas;
  }

  getListaActividades(idTarea:number){
    console.log(idTarea, 'idRecibido....')
    let listaActividades = new Array;
    for(let i in this.tareas){
      if(idTarea === this.tareas[i].id){
        listaActividades = this.tareas[i].ListaActividades;
        break;
      }
    }
    
    return listaActividades;
    
  }

  getListas(id:number){
    return this.http.get(environment.BASE_API +'/lista-actividad/'+`${id}`);
  }

}
