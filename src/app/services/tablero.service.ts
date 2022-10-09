import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TableroService {

  constructor(private http: HttpClient) { }

  getTableros(){
    return this.http.get(environment.BASE_API + '/tableros'); 
  }

  getTableroId(idTablero : number){
    return this.http.get(environment.BASE_API + '/tableros/'+ `${idTablero}`);
  }

  getActividades(id:number){
    let resultado = 'tablero 1';
    if(id === 1){
      return resultado;
    } else{
      resultado = 'tablero 2';
      return resultado; 
    }
  }
}
