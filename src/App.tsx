import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import MarketData from './pages/MarketData';
import CRMDashboard from './pages/CRMDashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Rentals from './pages/Rentals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to="/app/donnees-marche" replace />} />
          <Route path="donnees-marche" element={<MarketData />} />
          <Route path="crm" element={<CRMDashboard />} />
          <Route path="crm/proprietes" element={<Properties />} />
          <Route path="crm/locataires" element={<Tenants />} />
          <Route path="crm/locations" element={<Rentals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
