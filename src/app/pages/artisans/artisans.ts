import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { Artisan } from '../../core/models/artisan';
import { ArtisanService } from '../../core/services/artisan';
import { ArtisanCard } from '../../shared/components/artisan-card/artisan-card';

@Component({
  selector: 'app-artisans',
  imports: [
  ArtisanCard
  ],
  templateUrl: './artisans.html',
  styleUrl: './artisans.css',
})
export class Artisans implements OnInit {

  private artisanService = inject(ArtisanService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  artisans: Artisan[] = [];
  selectedCategory = '';

  ngOnInit(): void {

     this.artisanService.getArtisans().subscribe(data => {

      this.artisans = data;
      this.changeDetectorRef.markForCheck();
      console.log('Tous les artisans :', this.artisans);

    });
  }

  get filteredArtisans(): Artisan[] {

      if (!this.selectedCategory) {
        return this.artisans;
      }

      return this.artisans.filter(
        artisan => artisan.category === this.selectedCategory
      );

  }

}
