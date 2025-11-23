# DarALouer - Plateforme de Gestion Locative

Application React TypeScript pour le marché marocain combinant des données de marché locatif et un CRM pour propriétaires.

## 🌟 Fonctionnalités

### 📊 Données du Marché Locatif
- Statistiques détaillées pour 10 villes marocaines principales
- Prix moyens par nuit et taux d'occupation
- Graphiques interactifs montrant l'évolution mensuelle
- Comparaison des revenus estimés entre villes
- Tendances du marché (hausse, baisse, stable)

### 🏢 CRM pour Propriétaires

#### Tableau de Bord
- Vue d'ensemble des statistiques clés
- Suivi du taux d'occupation
- Revenus mensuels
- Alertes sur les paiements en attente

#### Gestion des Propriétés
- Liste complète des biens immobiliers
- Filtrage par statut (Disponible, Occupé, Maintenance)
- Recherche par nom, ville ou adresse
- Détails complets (superficie, chambres, prix)

#### Gestion des Locataires
- Base de données des locataires
- Informations de contact complètes
- Statut actif/inactif
- Historique des locations

#### Gestion des Locations
- Suivi des contrats de location
- Historique détaillé des paiements
- Gestion des cautions
- Statuts (En cours, À venir, Terminé)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build
```

## 🔐 Configuration Google OAuth

Pour activer l'authentification Google, suivez ces étapes :

### 1. Créer un projet Google Cloud

1. Accédez à [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Dans le menu de navigation, allez à **APIs & Services** > **Credentials**

### 2. Configurer l'écran de consentement OAuth

1. Cliquez sur **OAuth consent screen** dans le menu latéral
2. Sélectionnez **External** (ou Internal si vous avez Google Workspace)
3. Remplissez les informations requises :
   - Nom de l'application : **DaraLouer**
   - Email d'assistance utilisateur
   - Logo de l'application (optionnel)
4. Ajoutez les scopes nécessaires (email, profile)
5. Sauvegardez et continuez

### 3. Créer les identifiants OAuth 2.0

1. Retournez à **Credentials**
2. Cliquez sur **Create Credentials** > **OAuth client ID**
3. Sélectionnez **Web application**
4. Configurez :
   - **Nom** : DaraLouer Frontend
   - **Authorized JavaScript origins** :
     - `http://localhost:5173` (développement)
     - Ajoutez votre domaine de production si nécessaire
   - **Authorized redirect URIs** :
     - `http://localhost:5173` (développement)
5. Cliquez sur **Create**
6. Copiez le **Client ID** qui s'affiche

### 4. Configurer les variables d'environnement

1. Copiez le fichier `.env.example` vers `.env` :
   ```bash
   cp .env.example .env
   ```

2. Ouvrez `.env` et remplacez `your_google_client_id_here` par votre Client ID :
   ```env
   VITE_GOOGLE_CLIENT_ID=votre_client_id_ici.apps.googleusercontent.com
   ```

3. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```

### 5. Tester l'authentification

1. Accédez à la page de connexion : `http://localhost:5173/login`
2. Cliquez sur **Continuer avec Google**
3. Sélectionnez votre compte Google
4. Acceptez les permissions demandées
5. Vous serez redirigé vers l'application

**Note** : Pour la production, vous devrez implémenter un backend pour :
- Vérifier les tokens Google
- Gérer les sessions utilisateur
- Stocker les informations utilisateur dans une base de données

## 🛠️ Technologies Utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne
- **React Router** - Navigation
- **Recharts** - Graphiques et visualisations
- **Lucide React** - Icônes
- **date-fns** - Manipulation de dates
- **@react-oauth/google** - Authentification Google OAuth 2.0

## 📁 Structure du Projet

```
src/
├── components/       # Composants réutilisables
├── data/            # Données statiques
│   ├── rentalData.ts    # Données du marché locatif
│   └── crmData.ts       # Données CRM
├── layouts/         # Layouts de l'application
│   └── MainLayout.tsx   # Layout principal avec navigation
├── pages/           # Pages de l'application
│   ├── MarketData.tsx   # Données du marché
│   ├── CRMDashboard.tsx # Tableau de bord CRM
│   ├── Properties.tsx   # Gestion propriétés
│   ├── Tenants.tsx      # Gestion locataires
│   └── Rentals.tsx      # Gestion locations
├── types/           # Définitions TypeScript
└── App.tsx          # Point d'entrée principal
```

## 🎨 Design

L'interface utilise une palette de couleurs moderne avec :
- Bleu primaire (#2563eb) pour les éléments principaux
- Vert (#10b981) pour les statuts positifs
- Système de design cohérent avec des composants réutilisables
- Design responsive adapté mobile et desktop

## 📊 Données Statiques

L'application utilise des données statiques pour :
- 10 villes marocaines (Casablanca, Marrakech, Rabat, Fès, Tanger, Agadir, etc.)
- 8 propriétés exemples
- 6 locataires
- 5 contrats de location avec historique de paiements

## 🌍 Villes Couvertes

- Casablanca
- Marrakech
- Rabat
- Fès
- Tanger
- Agadir
- Essaouira
- Meknès
- Ouarzazate
- Chefchaouen

## 🌐 Accès à l'Application

Une fois le serveur de développement lancé, accédez à l'application sur :
**http://localhost:5173/**

## 📝 Licence

Ce projet est un prototype avec des données statiques à des fins de démonstration.

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

Développé avec ❤️ pour le marché immobilier marocain
