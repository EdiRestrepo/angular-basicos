import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {


  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()        //Quiere decir que vamos a emitir un nuevo personaje
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }

    this.onNuevoPersonaje.emit( this.nuevo ); //this.nuevo es de tipo personaje, es lo que va a emitir
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
