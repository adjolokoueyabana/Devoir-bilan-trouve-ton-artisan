import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {

  // Configuration de l'environnement de test.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  // Vérifie que le composant est créé correctement.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Vérifie que le titre est affiché.
  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Devoir-trouve-ton-artisan');
  });

});