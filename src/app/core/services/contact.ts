import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface ContactMessage {
  name: string;
  subject: string;
  message: string;
  recipient: string;
}

export interface ContactResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  sendMessage(
    contactMessage: ContactMessage
  ): Observable<ContactResponse> {

    return this.http.post<ContactResponse>(
      environment.contactApiUrl,
      contactMessage
    );

  }

}