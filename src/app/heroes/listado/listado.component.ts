import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  heroeBorrado: string = '';

  borrarHeroe(i: number): void {
    console.log('Borrando heroes...');
    
    this.heroeBorrado = this.heroes[i];

    this.heroes = this.heroes.filter(heroe => heroe != this.heroeBorrado);
  }
}
