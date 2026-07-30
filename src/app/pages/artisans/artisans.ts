import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private changeDetectorRef = inject(ChangeDetectorRef);

  artisans: Artisan[] = [];
  selectedCategory = '';
  searchTerm = '';

  ngOnInit(): void {

      this.route.queryParamMap.subscribe(params => {

        this.selectedCategory =
          params.get('category') ?? '';

        this.searchTerm =
          params.get('search') ?? '';

        this.changeDetectorRef.markForCheck();

      });

      this.artisanService.getArtisans().subscribe(data => {

        this.artisans = data;

        this.changeDetectorRef.markForCheck();

      });

  }

  get categoryTitle(): string {

    switch (this.selectedCategory) {

      case 'Bâtiment':
        return 'Bâtiment';

      case 'Services':
        return 'Services';

      case 'Fabrication':
        return 'Fabrication';

      case 'Alimentation':
        return 'Alimentation';

      default:
        return 'Tous les artisans';

    }

  }

  get filteredArtisans(): Artisan[] {

    const search = this.searchTerm
      .toLowerCase()
      .trim();

    return this.artisans.filter(artisan => {

      const matchesCategory =
        !this.selectedCategory ||
        artisan.category === this.selectedCategory;

      const matchesSearch =
        !search ||
        artisan.name.toLowerCase().includes(search) ||
        artisan.specialty.toLowerCase().includes(search) ||
        artisan.location.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;

    });

  }

  resetFilters(): void {

    this.searchTerm = '';
    this.selectedCategory = '';

    this.router.navigate(['/artisans']);

  }

  onCategoryChange(category: string): void {

    this.selectedCategory = category;

    this.router.navigate(
      ['/artisans'],
      {
        queryParams: {
          category: category || null
        }
      }
    );

  }

}