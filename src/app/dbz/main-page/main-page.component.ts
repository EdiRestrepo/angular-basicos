import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

//   public personajes: Personaje[] = [{
//     nombre: 'Mestro Roshi',
//     poder: 1000
//   },
// {nombre: 'Mestro Roshi',
// poder: 1000}];

// onNuevoPersonaje(personaje: Personaje):void{
  // }

  // onDelete(index:number): void{
  //   this._personajes.splice(index,1)
  //   console.log(index)
  // }

  constructor() {}

  nuevo: Personaje = {
    nombre: 'Mestro Roshi',
    poder: 1000
  }

}
