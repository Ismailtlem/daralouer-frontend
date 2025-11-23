import { useState } from 'react';
import { Plus, Search, Mail, Phone, UserCircle2, Building2 } from 'lucide-react';
import { locataires, locations, proprietes } from '../data/crmData';
import './Tenants.css';

const Tenants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('Tous');

  const filteredTenants = locataires.filter((tenant) => {
    const matchesSearch =
      tenant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.telephone.includes(searchTerm);

    const matchesStatus = filterStatus === 'Tous' || tenant.statut === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getTenantLocation = (tenantId: string) => {
    return locations.find(
      (loc) => loc.locataireId === tenantId && loc.statut === 'En cours'
    );
  };

  const stats = {
    total: locataires.length,
    actifs: locataires.filter((t) => t.statut === 'Actif').length,
    inactifs: locataires.filter((t) => t.statut === 'Inactif').length,
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Gestion des Locataires</h1>
          <p className="text-gray-600">
            {filteredTenants.length} locataire(s) trouvé(s)
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Ajouter un Locataire
        </button>
      </div>

      {/* Statistiques rapides */}
      <div className="stats-grid">
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Total</p>
          <p className="stat-mini-value">{stats.total}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Actifs</p>
          <p className="stat-mini-value text-success">{stats.actifs}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Inactifs</p>
          <p className="stat-mini-value text-gray-500">{stats.inactifs}</p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="card">
        <div className="filters-row">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher par nom, email ou téléphone..."
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
              <option value="Actif">Actif</option>
              <option value="Inactif">Inactif</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des locataires */}
      <div className="tenants-list">
        {filteredTenants.map((tenant) => {
          const currentLocation = getTenantLocation(tenant.id);
          const property = currentLocation
            ? proprietes.find((p) => p.id === currentLocation.proprieteId)
            : null;

          return (
            <div key={tenant.id} className="card tenant-card">
              <div className="tenant-header">
                <div className="tenant-avatar">
                  <UserCircle2 size={48} />
                </div>
                <div className="tenant-info-header">
                  <h3>
                    {tenant.prenom} {tenant.nom}
                  </h3>
                  <span
                    className={`badge ${
                      tenant.statut === 'Actif' ? 'badge-success' : 'badge-gray'
                    }`}
                  >
                    {tenant.statut}
                  </span>
                </div>
              </div>

              <div className="tenant-details">
                <div className="detail-row">
                  <Mail size={16} />
                  <a href={`mailto:${tenant.email}`}>{tenant.email}</a>
                </div>
                <div className="detail-row">
                  <Phone size={16} />
                  <a href={`tel:${tenant.telephone}`}>{tenant.telephone}</a>
                </div>
                <div className="detail-row">
                  <UserCircle2 size={16} />
                  <span>CIN: {tenant.cin}</span>
                </div>
                <div className="detail-row">
                  <UserCircle2 size={16} />
                  <span>{tenant.profession}</span>
                </div>
              </div>

              {currentLocation && property && (
                <div className="tenant-current-rental">
                  <div className="rental-badge">
                    <Building2 size={16} />
                    <span>Location en cours</span>
                  </div>
                  <p className="rental-property">{property.nom}</p>
                  <p className="text-sm text-gray-600">
                    Du {new Date(currentLocation.dateDebut).toLocaleDateString('fr-FR')}{' '}
                    au {new Date(currentLocation.dateFin).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              )}

              <div className="tenant-footer">
                <span className="text-sm text-gray-600">
                  Inscrit le{' '}
                  {new Date(tenant.dateInscription).toLocaleDateString('fr-FR')}
                </span>
                <div className="tenant-actions">
                  <button className="btn btn-secondary">Modifier</button>
                  <button className="btn btn-primary">Détails</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTenants.length === 0 && (
        <div className="card empty-state">
          <UserCircle2 size={48} className="text-gray-400" />
          <p className="text-gray-600">Aucun locataire trouvé</p>
        </div>
      )}
    </div>
  );
};

export default Tenants;
