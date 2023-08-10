import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input()
  // personajes: Personaje [] = [];

  // @Input()
  // public personajeList: Personaje[]=[{
  //   nombre: 'Mestro Roshi',
  //   poder: 1000
  // }]

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index:number):void{
  //   this.onDelete.emit( index); //this.nuevo es de tipo personaje, es lo que va a emitir
  // }



  constructor(private dbzService: DbzService) {}

  get personajes(){
    return this.dbzService.personajes;
  }

  // delete(index:number){
  //   this.dbzService.onDeleteCharacter(index)
  // }

  deleteById(id?:string){
    if(!id) return;
    this.dbzService.deleteCharacterById(id);
  }

}
