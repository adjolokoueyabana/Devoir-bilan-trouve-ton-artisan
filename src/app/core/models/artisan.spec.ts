import type { Artisan } from './artisan';

describe('Artisan', () => {

  // Données d'un artisan utilisées pour le test.
  let artisan: Artisan;

  // Création d'un objet conforme à l'interface Artisan.
  beforeEach(() => {
    artisan = {
      id: '1',
      name: 'Jean Dupont',
      specialty: 'Plombier',
      category: 'Bâtiment',
      location: 'Lyon',
      about: 'Artisan spécialisé en plomberie.',
      note: '4.5',
      top: true,
      website: 'https://example.com',
      email: 'contact@example.com'
    };
  });

  // Vérifie que l'objet artisan est correctement créé.
  it('should be created', () => {
    expect(artisan).toBeTruthy();
  });

});