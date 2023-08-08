import { Component } from '@angular/core';


@Component({
  selector:  'app-heore',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string{
    return `${ this.nombre} - ${ this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

  resetForm():void{
    this.nombre = 'iroman';
    this.edad = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }

}
