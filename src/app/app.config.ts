import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// Configuration globale de l'application Angular.
export const appConfig: ApplicationConfig = {
  providers: [
    // Gestion globale des erreurs du navigateur.
    provideBrowserGlobalErrorListeners(),

    // Configuration des routes de l'application.
    provideRouter(routes),

    // Activation du client HTTP pour les requêtes vers l'API.
    provideHttpClient()
  ]
};