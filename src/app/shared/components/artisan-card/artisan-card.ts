import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Artisan } from '../../../core/models/artisan';
import { Rating } from '../rating/rating';

@Component({
  selector: 'app-artisan-card',
  imports: [
    RouterLink,
    Rating
  ],
  templateUrl: './artisan-card.html',
  styleUrl: './artisan-card.css',
})
export class ArtisanCard {

  @Input({ required: true })
  artisan!: Artisan;

}