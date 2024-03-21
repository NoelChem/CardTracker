// Beispiel-Hauptkomponente, z.B. app.component.ts
import { Component } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component'; // Passe den Pfad entsprechend deiner Struktur an

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My Trading Card Game!</h1>
    <app-card-list></app-card-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

