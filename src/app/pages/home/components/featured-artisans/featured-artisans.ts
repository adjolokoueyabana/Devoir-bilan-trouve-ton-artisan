import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { Artisan } from '../../../../core/models/artisan';
import { ArtisanService } from '../../../../core/services/artisan';
import { ArtisanCard } from '../../../../shared/components/artisan-card/artisan-card';

// Composant affichant les artisans mis en avant sur la page d'accueil.
@Component({
  selector: 'app-featured-artisans',
  standalone: true,

  imports: [
    ArtisanCard
  ],

  templateUrl: './featured-artisans.html',
  styleUrl: './featured-artisans.css'
})
export class FeaturedArtisans implements OnInit {

  // Injection des services nécessaires au composant.
  private artisanService = inject(ArtisanService);

  private changeDetectorRef = inject(ChangeDetectorRef);

  // Liste des artisans mis en avant.
  artisans: Artisan[] = [];

  // Charge les artisans et conserve uniquement ceux mis en avant.
  ngOnInit(): void {

    this.artisanService.getArtisans().subscribe(data => {

      this.artisans = data.filter(artisan => artisan.top);
      this.changeDetectorRef.markForCheck();

    });

  }

}