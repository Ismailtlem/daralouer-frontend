import { useState } from 'react';
import { Plus, Search, Calendar, DollarSign, CheckCircle, Clock, XCircle } from 'lucide-react';
import { locations, proprietes, locataires } from '../data/crmData';
import './Rentals.css';

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('Tous');

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString()} DH`;
  };

  const filteredRentals = locations.filter((rental) => {
    const property = proprietes.find((p) => p.id === rental.proprieteId);
    const tenant = locataires.find((t) => t.id === rental.locataireId);

    const matchesSearch =
      property?.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant?.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant?.prenom.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'Tous' || rental.statut === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (statut: string) => {
    if (statut === 'En cours') return 'badge-success';
    if (statut === 'À venir') return 'badge-info';
    return 'badge-gray';
  };

  const getPaymentStatusBadge = (statut: string) => {
    if (statut === 'Payé') return 'badge-success';
    if (statut === 'En retard') return 'badge-danger';
    return 'badge-warning';
  };

  const getPaymentIcon = (statut: string) => {
    if (statut === 'Payé') return <CheckCircle size={16} />;
    if (statut === 'En retard') return <XCircle size={16} />;
    return <Clock size={16} />;
  };

  const stats = {
    total: locations.length,
    enCours: locations.filter((r) => r.statut === 'En cours').length,
    termine: locations.filter((r) => r.statut === 'Terminé').length,
    aVenir: locations.filter((r) => r.statut === 'À venir').length,
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Gestion des Locations</h1>
          <p className="text-gray-600">
            {filteredRentals.length} location(s) trouvée(s)
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nouvelle Location
        </button>
      </div>

      {/* Statistiques rapides */}
      <div className="stats-grid">
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Total</p>
          <p className="stat-mini-value">{stats.total}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">En Cours</p>
          <p className="stat-mini-value text-success">{stats.enCours}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">À Venir</p>
          <p className="stat-mini-value text-primary">{stats.aVenir}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Terminées</p>
          <p className="stat-mini-value text-gray-500">{stats.termine}</p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="card">
        <div className="filters-row">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher par propriété ou locataire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Statut:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="Tous">Tous</option>
              <option value="En cours">En cours</option>
              <option value="À venir">À venir</option>
              <option value="Terminé">Terminé</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des locations */}
      <div className="rentals-list">
        {filteredRentals.map((rental) => {
          const property = proprietes.find((p) => p.id === rental.proprieteId);
          const tenant = locataires.find((t) => t.id === rental.locataireId);

          return (
            <div key={rental.id} className="card rental-card">
              <div className="rental-header">
                <div>
                  <h3>{property?.nom}</h3>
                  <p className="text-sm text-gray-600">
                    {tenant?.prenom} {tenant?.nom}
                  </p>
                </div>
                <span className={`badge ${getStatusBadge(rental.statut)}`}>
                  {rental.statut}
                </span>
              </div>

              <div className="rental-details">
                <div className="detail-item">
                  <Calendar size={16} />
                  <div>
                    <p className="detail-label">Période</p>
                    <p className="detail-value">
                      {new Date(rental.dateDebut).toLocaleDateString('fr-FR')} -{' '}
                      {new Date(rental.dateFin).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <DollarSign size={16} />
                  <div>
                    <p className="detail-label">Montant Mensuel</p>
                    <p className="detail-value">
                      {formatCurrency(rental.montantMensuel)}
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <DollarSign size={16} />
                  <div>
                    <p className="detail-label">Caution</p>
                    <p className="detail-value">{formatCurrency(rental.caution)}</p>
                  </div>
                </div>
              </div>

              {rental.paiements.length > 0 && (
                <div className="payments-section">
                  <h4>Historique des Paiements</h4>
                  <div className="payments-timeline">
                    {rental.paiements.map((payment) => (
                      <div key={payment.id} className="payment-timeline-item">
                        <div className="payment-timeline-content">
                          <div className="payment-info">
                            {getPaymentIcon(payment.statut)}
                            <div>
                              <p className="payment-type">
                                {payment.type} -{' '}
                                {new Date(payment.date).toLocaleDateString('fr-FR')}
                              </p>
                              <p className="text-sm text-gray-600">
                                {payment.moyenPaiement}
                              </p>
                            </div>
                          </div>
                          <div className="payment-amount-section">
                            <p className="payment-amount">
                              {formatCurrency(payment.montant)}
                            </p>
                            <span
                              className={`badge ${getPaymentStatusBadge(
                                payment.statut
                              )}`}
                            >
                              {payment.statut}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rental-actions">
                <button className="btn btn-secondary">Modifier</button>
                <button className="btn btn-primary">Détails</button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRentals.length === 0 && (
        <div className="card empty-state">
          <Calendar size={48} className="text-gray-400" />
          <p className="text-gray-600">Aucune location trouvée</p>
        </div>
      )}
    </div>
  );
};

export default Rentals;
