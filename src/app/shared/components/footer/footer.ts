import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Composant affichant le pied de page du site.
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {}
