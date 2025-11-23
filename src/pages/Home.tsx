import { Link } from 'react-router-dom';
import { BarChart3, Building2, MapPin, FileText, TrendingUp, Users, Home as HomeIcon } from 'lucide-react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title-main">
            Données et outils pour réussir<br />
            votre investissement locatif
          </h1>
          <p className="hero-subtitle">
            Accédez aux données de location longue durée dans les principales villes du Maroc
            et gérez votre patrimoine locatif avec notre CRM intégré
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn-hero-cta btn-hero-primary">
              Explorez les données du marché
            </Link>
            <Link to="/login" className="btn-hero-cta btn-hero-secondary">
              Gérez vos propriétés avec le CRM
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="features-intro">
            <div className="features-badge">
              ✨ Fonctionnalités
            </div>
            <h2 className="section-title">
              Une plateforme complète pour investisseurs et gestionnaires immobiliers
            </h2>
            <p className="section-subtitle">
              DaraLouer vous accompagne dans vos décisions d'investissement et simplifie
              la gestion quotidienne de vos biens locatifs.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1: Market Data */}
            <div className="feature-card-large">
              <div className="feature-card-content">
                <div className="feature-icon-large">
                  <HomeIcon size={40} />
                </div>
                <h3>Données de la location longue durée dans les principales villes du Maroc</h3>
                <p>
                  Explorez les prix moyens, les taux d'occupation et les tendances du marché locatif
                  dans les grandes villes marocaines : Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir et plus.
                </p>
                <ul className="feature-list">
                  <li>
                    <MapPin size={18} />
                    <span>Analyse par ville et quartier</span>
                  </li>
                  <li>
                    <TrendingUp size={18} />
                    <span>Évolution des prix et tendances</span>
                  </li>
                  <li>
                    <BarChart3 size={18} />
                    <span>Statistiques détaillées du marché</span>
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="visual-placeholder">
                  <MapPin size={80} />
                  <p>Marché locatif<br />10+ villes</p>
                </div>
              </div>
            </div>

            {/* Feature 2: CRM */}
            <div className="feature-card-large reverse">
              <div className="feature-visual">
                <div className="visual-placeholder">
                  <FileText size={80} />
                  <p>Contrats & Paiements<br />automatisés</p>
                </div>
              </div>
              <div className="feature-card-content">
                <div className="feature-icon-large">
                  <Building2 size={40} />
                </div>
                <h3>CRM pour la gestion locative</h3>
                <p>
                  Centralisez la gestion de vos propriétés, locataires et contrats de location
                  dans une seule interface intuitive et puissante.
                </p>
                <ul className="feature-list">
                  <li>
                    <Building2 size={18} />
                    <span>Gestion des propriétés et inventaire</span>
                  </li>
                  <li>
                    <Users size={18} />
                    <span>Suivi des locataires et contacts</span>
                  </li>
                  <li>
                    <FileText size={18} />
                    <span>Contrats et paiements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Villes couvertes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Propriétés analysées</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Données actualisées</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Commencez à optimiser vos investissements locatifs</h2>
          <p>
            Rejoignez les investisseurs et gestionnaires immobiliers qui utilisent DaraLouer
            pour prendre des décisions éclairées et gérer efficacement leur patrimoine.
          </p>
          <Link to="/login" className="btn-cta">
            Accéder à la plateforme
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/daralouer-icon.png" alt="DaraLouer" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span>DaraLouer</span>
          </div>
          <p className="footer-text">
            &copy; 2024 DaraLouer. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
