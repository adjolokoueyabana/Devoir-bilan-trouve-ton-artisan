import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { FeaturedArtisans } from './components/featured-artisans/featured-artisans';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    HowItWorks,
    FeaturedArtisans,
    
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}