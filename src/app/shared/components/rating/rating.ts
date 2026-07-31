import { Component, Input } from '@angular/core';

// Composant affichant la note d'un artisan sous forme de cinq étoiles.
@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {

  // Note de l'artisan transmise par le composant parent.
  @Input()
  rating = 0;

  // Tableau représentant les cinq étoiles à afficher.
  stars = [1, 2, 3, 4, 5];

}