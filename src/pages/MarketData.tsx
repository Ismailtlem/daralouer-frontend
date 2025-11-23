import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { citiesRentalData, marrakechMonthlyStats, casablancaMonthlyStats } from '../data/rentalData';
import './MarketData.css';

const MarketData = () => {
  const [selectedCity, setSelectedCity] = useState('Marrakech');

  const cityStats = selectedCity === 'Marrakech' ? marrakechMonthlyStats : casablancaMonthlyStats;

  const getTrendIcon = (tendance: string) => {
    if (tendance === 'hausse') return <TrendingUp size={16} className="trend-icon up" />;
    if (tendance === 'baisse') return <TrendingDown size={16} className="trend-icon down" />;
    return <Minus size={16} className="trend-icon stable" />;
  };

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString()} DH`;
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Données du Marché Locatif</h1>
        <p className="text-gray-600">
          Statistiques et tendances de la location immobilière au Maroc
        </p>
      </div>

      {/* Vue d'ensemble */}
      <div className="stats-grid">
        {citiesRentalData.slice(0, 4).map((city) => (
          <div key={city.id} className="card stat-card">
            <h3>{city.ville}</h3>
            <p className="text-sm text-gray-600 mb-4">{city.region}</p>
            <div className="stat-value">{formatCurrency(city.prixMoyenNuit)}</div>
            <p className="text-sm text-gray-600 mb-2">Prix moyen / nuit</p>
            <div className="flex items-center gap-2">
              {getTrendIcon(city.tendance)}
              <span className={`trend-text ${city.tendance}`}>
                {city.tendancePourcentage > 0 ? '+' : ''}
                {city.tendancePourcentage}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tableau des villes */}
      <div className="card mt-4">
        <h2 className="mb-4">Classement par Ville</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ville</th>
                <th>Région</th>
                <th>Prix Moyen/Nuit</th>
                <th>Taux d'Occupation</th>
                <th>Revenu Mensuel Moyen</th>
                <th>Propriétés</th>
                <th>Tendance</th>
              </tr>
            </thead>
            <tbody>
              {citiesRentalData.map((city) => (
                <tr key={city.id}>
                  <td className="font-semibold">{city.ville}</td>
                  <td className="text-gray-600">{city.region}</td>
                  <td>{formatCurrency(city.prixMoyenNuit)}</td>
                  <td>
                    <span className="occupancy-badge">{city.tauxOccupation}%</span>
                  </td>
                  <td>{formatCurrency(city.revenuMensuelMoyen)}</td>
                  <td>{city.nombreProprietes.toLocaleString()}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(city.tendance)}
                      <span className={`trend-text ${city.tendance}`}>
                        {city.tendancePourcentage > 0 ? '+' : ''}
                        {city.tendancePourcentage}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Graphiques mensuels */}
      <div className="card mt-4">
        <div className="chart-header">
          <h2>Évolution Mensuelle</h2>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="city-select"
          >
            <option value="Marrakech">Marrakech</option>
            <option value="Casablanca">Casablanca</option>
          </select>
        </div>

        <div className="charts-grid">
          <div className="chart-box">
            <h3 className="chart-title">Prix Moyen par Nuit</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cityStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} DH`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="prixMoyen"
                  stroke="#2563eb"
                  strokeWidth={2}
                  name="Prix Moyen (DH)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h3 className="chart-title">Taux d'Occupation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar
                  dataKey="tauxOccupation"
                  fill="#10b981"
                  name="Taux d'Occupation (%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box full-width">
            <h3 className="chart-title">Revenu Mensuel Estimé</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} DH`} />
                <Legend />
                <Bar dataKey="revenu" fill="#f59e0b" name="Revenu (DH)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
