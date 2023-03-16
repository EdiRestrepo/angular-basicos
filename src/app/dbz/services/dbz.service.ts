import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 7500
        }
      ];

      get personajes(){
        return [...this._personajes]; //El operador spread ... rompe la referencia creandome un nuevo arreglo
      }

      constructor(){
        console.log('Servicio inicializado');
    }

    agregarPersonaje(perosnaje: Personaje){
        this._personajes.push( perosnaje );
    }

}