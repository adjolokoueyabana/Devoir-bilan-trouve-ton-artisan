import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Artisans } from './pages/artisans/artisans';
import { ArtisanDetail } from './pages/artisan-detail/artisan-detail';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Accessibility } from './pages/accessibility/accessibility';
import { Cookies } from './pages/cookies/cookies';
import { NotFound } from './pages/not-found/not-found';

// Définition des routes de navigation de l'application.
export const routes: Routes = [
  // Page d'accueil.
  {
    path: '',
    component: Home,
    title: 'Accueil | Trouve ton artisan'
  },

  // Liste des artisans.
  {
    path: 'artisans',
    component: Artisans,
    title: 'Tous les artisans | Trouve ton artisan'
  },

  // Fiche détaillée d'un artisan.
  {
    path: 'artisan/:id',
    component: ArtisanDetail,
    title: 'Fiche artisan | Trouve ton artisan'
  },

  // Page des mentions légales.
  {
    path: 'mentions-legales',
    component: LegalNotice
  },

  // Page de politique de confidentialité.
  {
    path: 'donnees-personnelles',
    component: PrivacyPolicy
  },

  // Page d'accessibilité.
  {
    path: 'accessibilite',
    component: Accessibility
  },

  // Page relative aux cookies.
  {
    path: 'cookies',
    component: Cookies
  },

  // Page affichée lorsqu'aucune route ne correspond à l'URL.
  {
    path: '**',
    component: NotFound
  }
];