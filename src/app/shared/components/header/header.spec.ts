import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {

  // Instance du composant et de son environnement de test.
  let component: Header;
  let fixture: ComponentFixture<Header>;

  // Configuration du module de test et création du composant.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // Vérifie que le composant est créé correctement.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});