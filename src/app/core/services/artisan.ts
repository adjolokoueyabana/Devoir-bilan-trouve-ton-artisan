import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Artisan } from '../models/artisan';

// Service permettant de récupérer les données des artisans.
@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  // Injection du client HTTP.
  private http = inject(HttpClient);

  // Chemin vers le fichier contenant les données des artisans.
  private readonly apiUrl = '/data/artisans.json';

  // Récupère la liste de tous les artisans.
  getArtisans(): Observable<Artisan[]> {

    return this.http.get<Artisan[]>(this.apiUrl);

  }

  // Recherche un artisan à partir de son identifiant.
  getArtisanById(id: string): Observable<Artisan | undefined> {

    return this.getArtisans().pipe(

      map(artisans =>
        artisans.find(artisan => artisan.id === id)
      )

    );

  }

}