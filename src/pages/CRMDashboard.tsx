import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  TrendingUp,
  AlertCircle,
  DollarSign,
  FileText,
} from 'lucide-react';
import { dashboardStats, proprietes, locations, locataires } from '../data/crmData';
import './CRMDashboard.css';

const CRMDashboard = () => {
  const formatCurrency = (value: number) => {
    return `${value.toLocaleString()} DH`;
  };

  // Obtenir les locations actives
  const activeRentals = locations.filter((loc) => loc.statut === 'En cours');

  // Obtenir les paiements en retard
  const latePayments = locations
    .flatMap((loc) => loc.paiements)
    .filter((payment) => payment.statut === 'En retard');

  // Obtenir les propriétés disponibles
  const availableProperties = proprietes.filter((p) => p.statut === 'Disponible');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Tableau de Bord CRM</h1>
        <p className="text-gray-600">
          Vue d'ensemble de vos propriétés et locations
        </p>
      </div>

      {/* Statistiques principales */}
      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-header">
            <div className="stat-icon building">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Propriétés</p>
              <p className="stat-value">{dashboardStats.proprietesTotal}</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="badge-success">
              {dashboardStats.proprietesOccupees} occupées
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <div className="stat-icon users">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Locataires Actifs</p>
              <p className="stat-value">{dashboardStats.locatairesActifs}</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="text-gray-600 text-sm">
              {locataires.filter((l) => l.statut === 'Actif').length} total
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <div className="stat-icon revenue">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Revenu Mensuel</p>
              <p className="stat-value">{formatCurrency(dashboardStats.revenuMensuel)}</p>
            </div>
          </div>
          <div className="stat-footer">
            <TrendingUp size={14} className="text-success" />
            <span className="text-success text-sm font-semibold">+12%</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <div className="stat-icon alert">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Paiements en Attente</p>
              <p className="stat-value">{dashboardStats.paiementsEnAttente}</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="text-gray-600 text-sm">
              {latePayments.length} en retard
            </span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Locations actives */}
        <div className="card">
          <div className="card-header">
            <h2 className="flex items-center gap-2">
              <FileText size={20} />
              Locations Actives
            </h2>
            <Link to="/crm/locations" className="link-button">
              Voir tout
            </Link>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Propriété</th>
                  <th>Locataire</th>
                  <th>Montant Mensuel</th>
                  <th>Date Fin</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {activeRentals.slice(0, 5).map((rental) => {
                  const propriete = proprietes.find((p) => p.id === rental.proprieteId);
                  const locataire = locataires.find((l) => l.id === rental.locataireId);

                  return (
                    <tr key={rental.id}>
                      <td className="font-semibold">{propriete?.nom}</td>
                      <td>
                        {locataire?.prenom} {locataire?.nom}
                      </td>
                      <td>{formatCurrency(rental.montantMensuel)}</td>
                      <td>
                        {new Date(rental.dateFin).toLocaleDateString('fr-FR')}
                      </td>
                      <td>
                        <span className="badge badge-success">{rental.statut}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Propriétés disponibles */}
        <div className="card">
          <div className="card-header">
            <h2 className="flex items-center gap-2">
              <Building2 size={20} />
              Propriétés Disponibles
            </h2>
            <Link to="/crm/proprietes" className="link-button">
              Voir tout
            </Link>
          </div>
          <div className="properties-list">
            {availableProperties.slice(0, 4).map((property) => (
              <div key={property.id} className="property-item">
                <div>
                  <p className="font-semibold">{property.nom}</p>
                  <p className="text-sm text-gray-600">
                    {property.ville} • {property.type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">
                    {formatCurrency(property.prixNuit)}/nuit
                  </p>
                  <p className="text-sm text-gray-600">
                    {property.chambres} ch. • {property.superficie}m²
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paiements récents */}
        <div className="card">
          <div className="card-header">
            <h2 className="flex items-center gap-2">
              <DollarSign size={20} />
              Paiements Récents
            </h2>
          </div>
          <div className="payments-list">
            {locations
              .flatMap((loc) =>
                loc.paiements.slice(-3).map((payment) => ({
                  ...payment,
                  location: loc,
                }))
              )
              .slice(-5)
              .reverse()
              .map((payment) => {
                const propriete = proprietes.find(
                  (p) => p.id === payment.location.proprieteId
                );
                const locataire = locataires.find(
                  (l) => l.id === payment.location.locataireId
                );

                return (
                  <div key={payment.id} className="payment-item">
                    <div>
                      <p className="font-semibold">
                        {locataire?.prenom} {locataire?.nom}
                      </p>
                      <p className="text-sm text-gray-600">{propriete?.nom}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {formatCurrency(payment.montant)}
                      </p>
                      <span
                        className={`badge ${
                          payment.statut === 'Payé'
                            ? 'badge-success'
                            : payment.statut === 'En retard'
                            ? 'badge-danger'
                            : 'badge-warning'
                        }`}
                      >
                        {payment.statut}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Taux d'occupation */}
        <div className="card">
          <div className="card-header">
            <h2 className="flex items-center gap-2">
              <TrendingUp size={20} />
              Taux d'Occupation
            </h2>
          </div>
          <div className="occupancy-chart">
            <div className="occupancy-value">
              <span className="occupancy-percentage">
                {dashboardStats.tauxOccupation}%
              </span>
              <p className="text-gray-600">Taux actuel</p>
            </div>
            <div className="occupancy-bar">
              <div
                className="occupancy-fill"
                style={{ width: `${dashboardStats.tauxOccupation}%` }}
              />
            </div>
            <div className="occupancy-stats">
              <div>
                <p className="text-sm text-gray-600">Occupées</p>
                <p className="font-semibold">{dashboardStats.proprietesOccupees}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Disponibles</p>
                <p className="font-semibold">
                  {dashboardStats.proprietesTotal - dashboardStats.proprietesOccupees}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="font-semibold">{dashboardStats.proprietesTotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
