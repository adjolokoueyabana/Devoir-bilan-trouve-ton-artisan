import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Artisan } from '../models/artisan';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private http = inject(HttpClient);

  private readonly apiUrl = '/data/artisans.json';

  getArtisans(): Observable<Artisan[]> {

    return this.http.get<Artisan[]>(this.apiUrl);

  }

  getArtisanById(id: string): Observable<Artisan | undefined> {

    return this.getArtisans().pipe(

      map(artisans =>
        artisans.find(artisan => artisan.id === id)
      )

    );

  }

}