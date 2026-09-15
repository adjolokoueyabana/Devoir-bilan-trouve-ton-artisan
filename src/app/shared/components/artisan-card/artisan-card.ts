import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Artisan } from '../../../core/models/artisan';
import { Rating } from '../rating/rating';

// Composant affichant les informations principales d'un artisan.
@Component({
  selector: 'app-artisan-card',
  imports: [
    RouterLink,
    Rating
  ],
  templateUrl: './artisan-card.html',
  styleUrl: './artisan-card.scss',
})
export class ArtisanCard {

  // Artisan reçu en entrée depuis le composant parent.
  @Input({ required: true })
  artisan!: Artisan;

}
