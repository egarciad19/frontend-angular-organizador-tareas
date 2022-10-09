import { Component, OnInit } from '@angular/core';
import { TableroService } from '../services/tablero.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.css']
})
export class TablerosComponent implements OnInit {

  tableros: any = []; 

  constructor(private tableroService: TableroService, private router: Router) {

    /*
    this.tableroService.getTableros().subscribe(t =>{
      this.tableros = t;
      console.log(this.tableros);
    });
    */

   }

  ngOnInit(): void {}

  irTableroSeleccionado(id:number){
    this.router.navigate(['/tablero', id]);
  }

  

}
