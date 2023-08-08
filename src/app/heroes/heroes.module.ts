import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule // Este modulo incluye las directivas ngIf, ngFor, ng-template, ngSwitch
  ]

})
export class HeroesModule {}
