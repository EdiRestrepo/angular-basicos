import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import {v4 as uuid } from 'uuid'

console.log(uuid())


@Injectable({
  providedIn: 'root'
})
export class DbzService {

    private _personajes: Personaje[] = [
        {
          id: uuid(),
          nombre: 'Goku',
          poder: 15000
        },
        {
          id: uuid(),
          nombre: 'Vegueta',
          poder: 7500
        },
        {
          id: uuid(),
          nombre: 'Trunks',
          poder: 2500
        }
      ];

      get personajes(){
        return [...this._personajes]; //El operador spread ... rompe la referencia creandome un nuevo arreglo
      }

      constructor(){
        console.log('Servicio inicializado');
    }

    agregarPersonaje(personaje: Personaje):void{
      const newCharacter: Personaje = {id:uuid(), ...personaje}
        this._personajes.push( newCharacter );
    }

    // onDeleteCharacter(index:number): void{
    //   this._personajes.splice(index,1)
    // }

    deleteCharacterById(id:string){
      this._personajes = this._personajes.filter(character => character.id !== id);
      console.log(id)
    }

}
