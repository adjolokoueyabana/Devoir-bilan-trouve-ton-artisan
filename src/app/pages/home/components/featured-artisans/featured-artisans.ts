import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { Artisan } from '../../../../core/models/artisan';
import { ArtisanService } from '../../../../core/services/artisan';
import { ArtisanCard } from '../../../../shared/components/artisan-card/artisan-card';

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

  private artisanService = inject(ArtisanService);

  private changeDetectorRef = inject(ChangeDetectorRef);

  artisans: Artisan[] = [];

  ngOnInit(): void {

    this.artisanService.getArtisans().subscribe(data => {

      this.artisans = data.filter(artisan => artisan.top);
      this.changeDetectorRef.markForCheck();

    });

  }

}