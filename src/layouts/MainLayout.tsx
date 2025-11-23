import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Building2,
  Users,
  FileText,
  LayoutDashboard
} from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/daralouer-icon.png" alt="DaraLouer" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <h1>DarALouer</h1>
        </div>

        <div className="nav-links">
          <Link
            to="/app/donnees-marche"
            className={`nav-link ${isActive('/app/donnees-marche') ? 'active' : ''}`}
          >
            <BarChart3 size={20} />
            <span>Données du Marché</span>
          </Link>

          <div className="nav-section">
            <div className="nav-section-title">CRM</div>

            <Link
              to="/app/crm"
              className={`nav-link ${isActive('/app/crm') ? 'active' : ''}`}
            >
              <LayoutDashboard size={20} />
              <span>Tableau de Bord</span>
            </Link>

            <Link
              to="/app/crm/proprietes"
              className={`nav-link ${isActive('/app/crm/proprietes') ? 'active' : ''}`}
            >
              <Building2 size={20} />
              <span>Propriétés</span>
            </Link>

            <Link
              to="/app/crm/locataires"
              className={`nav-link ${isActive('/app/crm/locataires') ? 'active' : ''}`}
            >
              <Users size={20} />
              <span>Locataires</span>
            </Link>

            <Link
              to="/app/crm/locations"
              className={`nav-link ${isActive('/app/crm/locations') ? 'active' : ''}`}
            >
              <FileText size={20} />
              <span>Locations</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
