import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

// Interface représentant les données du formulaire de contact.
export interface ContactMessage {

  // Nom de l'expéditeur.
  name: string;

  // Objet du message.
  subject: string;

  // Contenu du message.
  message: string;

  // Adresse électronique du destinataire.
  recipient: string;

}

// Interface représentant la réponse de l'API.
export interface ContactResponse {

  // Message retourné après le traitement de la demande.
  message: string;

}

// Service permettant d'envoyer un message via l'API de contact.
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Injection du client HTTP.
  private http = inject(HttpClient);

  // Envoie le message de contact à l'API.
  sendMessage(
    contactMessage: ContactMessage
  ): Observable<ContactResponse> {

    return this.http.post<ContactResponse>(
      environment.contactApiUrl,
      contactMessage
    );

  }

}