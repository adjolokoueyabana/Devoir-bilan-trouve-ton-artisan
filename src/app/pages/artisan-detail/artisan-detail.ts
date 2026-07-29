import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Artisan } from '../../core/models/artisan';
import { ArtisanService } from '../../core/services/artisan';
import { Rating } from '../../shared/components/rating/rating';

@Component({
  selector: 'app-artisan-detail',
  imports: [ 
    Rating,
    RouterLink
             
  ],
  templateUrl: './artisan-detail.html',
  styleUrl: './artisan-detail.css',
})
export class ArtisanDetail implements OnInit {

  private route = inject(ActivatedRoute);

  private artisanService = inject(ArtisanService);

  private changeDetectorRef = inject(ChangeDetectorRef);

  artisan?: Artisan;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.artisanService.getArtisanById(id).subscribe(artisan => {

        this.artisan = artisan;

        this.changeDetectorRef.markForCheck();

        console.log('Artisan récupéré :', this.artisan);

    });

  }

}
