import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,

  imports: [
    RouterLink,
    FormsModule
  ],

  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  searchTerm = '';

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      this.searchTerm =
        params.get('search') ?? '';

    });

  }

  onSearch(): void {

    const search = this.searchTerm.trim();

    this.router.navigate(
      ['/artisans'],
      {
        queryParams: {
          search: search || null
        }
      }
    );

  }

}
