import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Artisans } from './pages/artisans/artisans';
import { ArtisanDetail } from './pages/artisan-detail/artisan-detail';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Accessibility } from './pages/accessibility/accessibility';
import { Cookies } from './pages/cookies/cookies';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Accueil | Trouve ton artisan'
  },
  {
    path: 'artisans',
    component: Artisans,
    title: 'Tous les artisans | Trouve ton artisan'
  },
  {
    path: 'artisan/:id',
    component: ArtisanDetail,
    title: 'Fiche artisan | Trouve ton artisan'
  },
  {
    path: 'mentions-legales',
    component: LegalNotice
  },
  {
    path: 'donnees-personnelles',
    component: PrivacyPolicy
  },
  {
    path: 'accessibilite',
    component: Accessibility
  },
  {
    path: 'cookies',
    component: Cookies
  },
  {
    path: '**',
    component: NotFound
  }
];