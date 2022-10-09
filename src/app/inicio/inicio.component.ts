import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: []
})
export class InicioComponent implements OnInit {

  user: any = {
    username: "",
    id: 0,
    email: "",
    password: "",
    estado: "",
    nombre: "",
    apellido: "",
    telefono: ""
  };;

  constructor(
    private router: Router
    ) { 
      
    }

  

  ngOnInit(): void {

    let registrado: boolean = (localStorage.getItem("registrado")=='true') ? true : false;
   
    if (registrado){
      let usuarioLogueado: any = localStorage.getItem("sesion");
      this.user = JSON.parse(usuarioLogueado);
    } else {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
