import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Building2,
  Users,
  FileText,
  LayoutDashboard
} from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-800">
          <img src="/daralouer-icon.png" alt="DaraLouer" className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold">DarALouer</h1>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <Link
            to="/app/donnees-marche"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/app/donnees-marche')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <BarChart3 size={20} />
            <span className="font-medium">Données du Marché</span>
          </Link>

          <div className="mt-4">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              CRM
            </div>

            <Link
              to="/app/crm"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/app/crm')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="font-medium">Tableau de Bord</span>
            </Link>

            <Link
              to="/app/crm/proprietes"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/app/crm/proprietes')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Building2 size={20} />
              <span className="font-medium">Propriétés</span>
            </Link>

            <Link
              to="/app/crm/locataires"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/app/crm/locataires')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Users size={20} />
              <span className="font-medium">Locataires</span>
            </Link>

            <Link
              to="/app/crm/locations"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/app/crm/locations')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <FileText size={20} />
              <span className="font-medium">Locations</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
