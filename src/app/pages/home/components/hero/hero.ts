import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Composant affichant la section de présentation de la page d'accueil.
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {}
