// Interface représentant les informations d'un artisan.
export interface Artisan {

  // Identifiant unique de l'artisan.
  id: string;

  // Nom de l'artisan.
  name: string;

  // Spécialité de l'artisan.
  specialty: string;

  // Catégorie de l'artisan.
  category: string;

  // Ville de l'artisan.
  location: string;

  // Présentation de l'artisan.
  about: string;

  // Note attribuée à l'artisan.
  note: string;

  // Indique si l'artisan est mis en avant.
  top: boolean;

  // Site internet de l'artisan.
  website: string;

  // Adresse électronique de l'artisan.
  email: string;

}