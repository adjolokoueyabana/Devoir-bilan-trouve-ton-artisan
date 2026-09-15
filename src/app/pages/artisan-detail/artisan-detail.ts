import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { Artisan } from '../../core/models/artisan';
import { ArtisanService } from '../../core/services/artisan';
import {
  ContactMessage,
  ContactService
} from '../../core/services/contact';
import { Rating } from '../../shared/components/rating/rating';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [
    FormsModule,
    Rating,
    RouterLink
  ],
  templateUrl: './artisan-detail.html',
  styleUrl: './artisan-detail.scss',
})
export class ArtisanDetail implements OnInit {

  private route = inject(ActivatedRoute);

  private artisanService = inject(ArtisanService);

  private contactService = inject(ContactService);

  private changeDetectorRef = inject(ChangeDetectorRef);

  artisan?: Artisan;

  contactMessage: ContactMessage = {
    name: '',
    subject: '',
    message: '',
    recipient: ''
  };

  isSubmitting = false;

  successMessage = '';

  errorMessage = '';

  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (!id) {

      return;

    }

    this.artisanService
      .getArtisanById(id)
      .subscribe(artisan => {

        this.artisan = artisan;

        if (artisan) {

          this.contactMessage.recipient =
            artisan.email;

        }

        this.changeDetectorRef.markForCheck();

      });

  }

  onSubmit(form: NgForm): void {

    if (
      form.invalid ||
      !this.artisan ||
      this.isSubmitting
    ) {

      form.control.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.successMessage = '';

    this.errorMessage = '';

    this.contactMessage.recipient =
      this.artisan.email;

    this.contactService
      .sendMessage(this.contactMessage)
      .subscribe({

        next: response => {

          this.successMessage =
            response.message ||
            'Votre message a bien été envoyé.';

          this.isSubmitting = false;

          form.resetForm();

          this.contactMessage = {
            name: '',
            subject: '',
            message: '',
            recipient: this.artisan?.email ?? ''
          };

          this.changeDetectorRef.markForCheck();

        },

        error: () => {

          this.errorMessage =
            'Une erreur est survenue pendant l’envoi du message. Veuillez réessayer.';

          this.isSubmitting = false;

          this.changeDetectorRef.markForCheck();

        }

      });

  }

}
