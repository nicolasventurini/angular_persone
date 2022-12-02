import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PERSONE } from './listapersone.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css'],
})
export class PersonaComponent {
  persone = PERSONE;
  personaSelezionata?: Persona;
  /*eroe1: Eroe = {
    id: 1,
    nome: 'Windstorm',
  };*/
  onSelect(p: Persona) {
    this.personaSelezionata = p;
  }
}
