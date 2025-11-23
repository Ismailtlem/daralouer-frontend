// Types pour les données de location immobilière
export interface CityRentalData {
  id: string;
  ville: string;
  region: string;
  prixMoyenNuit: number;
  tauxOccupation: number;
  revenuMensuelMoyen: number;
  nombreProprietes: number;
  tendance: 'hausse' | 'baisse' | 'stable';
  tendancePourcentage: number;
}

export interface MonthlyStats {
  mois: string;
  prixMoyen: number;
  tauxOccupation: number;
  revenu: number;
}

// Types pour le CRM
export interface Propriete {
  id: string;
  nom: string;
  adresse: string;
  ville: string;
  type: 'Appartement' | 'Maison' | 'Villa' | 'Studio';
  superficie: number;
  chambres: number;
  sallesDeBain: number;
  prixNuit: number;
  statut: 'Disponible' | 'Occupé' | 'Maintenance';
  image?: string;
  dateAjout: string;
}

export interface Locataire {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  cin: string;
  dateNaissance: string;
  profession: string;
  statut: 'Actif' | 'Inactif';
  dateInscription: string;
}

export interface Location {
  id: string;
  proprieteId: string;
  locataireId: string;
  dateDebut: string;
  dateFin: string;
  montantMensuel: number;
  caution: number;
  statut: 'En cours' | 'Terminé' | 'À venir';
  paiements: Paiement[];
}

export interface Paiement {
  id: string;
  date: string;
  montant: number;
  type: 'Loyer' | 'Caution' | 'Charges';
  statut: 'Payé' | 'En attente' | 'En retard';
  moyenPaiement: 'Virement' | 'Espèces' | 'Chèque';
}

export interface DashboardStats {
  proprietesTotal: number;
  proprietesOccupees: number;
  locatairesActifs: number;
  revenuMensuel: number;
  tauxOccupation: number;
  paiementsEnAttente: number;
}
