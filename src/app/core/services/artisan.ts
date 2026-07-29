import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getArtisanById(id: number): Observable<Artisan | undefined> {

  return new Observable(observer => {

    this.getArtisans().subscribe(artisans => {

      observer.next(

        artisans.find(artisan => artisan.id === id)

      );

      observer.complete();

    });

  });

}

}