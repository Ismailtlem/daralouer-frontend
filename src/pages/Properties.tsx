import { useState } from 'react';
import { Plus, Search, MapPin, Home, Building2 } from 'lucide-react';
import { proprietes } from '../data/crmData';
import './Properties.css';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('Tous');

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString()} DH`;
  };

  const filteredProperties = proprietes.filter((prop) => {
    const matchesSearch =
      prop.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.adresse.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === 'Tous' || prop.statut === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (statut: string) => {
    if (statut === 'Disponible') return 'badge-success';
    if (statut === 'Occupé') return 'badge-info';
    return 'badge-warning';
  };

  const stats = {
    total: proprietes.length,
    disponible: proprietes.filter((p) => p.statut === 'Disponible').length,
    occupe: proprietes.filter((p) => p.statut === 'Occupé').length,
    maintenance: proprietes.filter((p) => p.statut === 'Maintenance').length,
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Gestion des Propriétés</h1>
          <p className="text-gray-600">
            {filteredProperties.length} propriété(s) trouvée(s)
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Ajouter une Propriété
        </button>
      </div>

      {/* Statistiques rapides */}
      <div className="stats-grid">
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Total</p>
          <p className="stat-mini-value">{stats.total}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Disponibles</p>
          <p className="stat-mini-value text-success">{stats.disponible}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Occupées</p>
          <p className="stat-mini-value text-primary">{stats.occupe}</p>
        </div>
        <div className="card stat-mini">
          <p className="text-sm text-gray-600">Maintenance</p>
          <p className="stat-mini-value text-warning">{stats.maintenance}</p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="card">
        <div className="filters-row">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher par nom, ville ou adresse..."
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
              <option value="Disponible">Disponible</option>
              <option value="Occupé">Occupé</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grille des propriétés */}
      <div className="properties-grid">
        {filteredProperties.map((property) => (
          <div key={property.id} className="card property-card">
            <div className="property-card-header">
              <div>
                <h3>{property.nom}</h3>
                <span className={`badge ${getStatusBadge(property.statut)}`}>
                  {property.statut}
                </span>
              </div>
            </div>

            <div className="property-card-body">
              <div className="property-info">
                <MapPin size={16} />
                <span>{property.adresse}</span>
              </div>
              <div className="property-info">
                <Home size={16} />
                <span>
                  {property.ville} • {property.type}
                </span>
              </div>

              <div className="property-features">
                <div className="feature">
                  <span className="feature-value">{property.superficie}</span>
                  <span className="feature-label">m²</span>
                </div>
                <div className="feature">
                  <span className="feature-value">{property.chambres}</span>
                  <span className="feature-label">Chambres</span>
                </div>
                <div className="feature">
                  <span className="feature-value">{property.sallesDeBain}</span>
                  <span className="feature-label">SDB</span>
                </div>
              </div>

              <div className="property-price">
                <span className="price-value">
                  {formatCurrency(property.prixNuit)}
                </span>
                <span className="price-label">/ nuit</span>
              </div>

              <div className="property-footer">
                <span className="text-sm text-gray-600">
                  Ajouté le {new Date(property.dateAjout).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>

            <div className="property-card-actions">
              <button className="btn btn-secondary">Modifier</button>
              <button className="btn btn-primary">Détails</button>
            </div>
          </div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="card empty-state">
          <Building2 size={48} className="text-gray-400" />
          <p className="text-gray-600">Aucune propriété trouvée</p>
        </div>
      )}
    </div>
  );
};

export default Properties;
