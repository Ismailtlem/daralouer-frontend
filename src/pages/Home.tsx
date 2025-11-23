import { Link } from 'react-router-dom';
import { BarChart3, Building2, MapPin, FileText, TrendingUp, Users, Home as HomeIcon } from 'lucide-react';
import Header from '../components/Header';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white mt-12 md:mt-16">
            Données et outils pour réussir<br />
            votre investissement locatif
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-blue-100 max-w-[900px] mx-auto">
            Accédez aux données de location longue durée dans les principales villes du Maroc
            et gérez votre patrimoine locatif avec notre CRM intégré
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 font-bold text-xl rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-green-500 text-white hover:bg-green-600 max-w-[600px] text-center">
              Explorez les données du marché
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 font-bold text-xl rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-purple-600 text-white hover:bg-purple-700 max-w-[600px] text-center">
              Gérez vos propriétés avec le CRM
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-white to-gray-50 relative" id="features">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-[0.95rem] font-semibold mb-6 border border-blue-200">
              ✨ Fonctionnalités
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 leading-tight tracking-tight">
              Une plateforme complète pour investisseurs et gestionnaires immobiliers
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-[800px] mx-auto">
              DaraLouer vous accompagne dans vos décisions d'investissement et simplifie
              la gestion quotidienne de vos biens locatifs.
            </p>
          </div>

          <div className="flex flex-col gap-16 animate-[fadeInUp_0.6s_ease-out]">
            {/* Feature 1: Market Data */}
            <div className="grid md:grid-cols-2 gap-16 items-center p-16 md:p-16 sm:p-8 bg-white rounded-3xl border-2 border-gray-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] hover:border-blue-600 relative overflow-hidden">
              <div className="flex flex-col gap-6">
                <div className="inline-flex p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-[1.25rem] w-fit shadow-[0_8px_20px_-4px_rgba(37,99,235,0.3)]">
                  <HomeIcon size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-2">
                  Données de la location longue durée dans les principales villes du Maroc
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Explorez les prix moyens, les taux d'occupation et les tendances du marché locatif
                  dans les grandes villes marocaines : Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir et plus.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <MapPin size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Analyse par ville et quartier</span>
                  </li>
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <TrendingUp size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Évolution des prix et tendances</span>
                  </li>
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <BarChart3 size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Statistiques détaillées du marché</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-8 w-full min-h-[350px] md:min-h-[350px] sm:min-h-[280px] bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-3xl text-white p-12 md:p-12 sm:p-8 relative shadow-[0_10px_30px_-5px_rgba(30,64,175,0.3)]">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)] rounded-3xl pointer-events-none"></div>
                  <MapPin size={80} className="opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-10" />
                  <p className="text-xl font-bold text-white text-shadow-[0_2px_8px_rgba(0,0,0,0.2)] z-10 text-center leading-relaxed">
                    Marché locatif<br />10+ villes
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: CRM */}
            <div className="grid md:grid-cols-2 gap-16 items-center p-16 md:p-16 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border-2 border-slate-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] hover:border-blue-600 relative overflow-hidden">
              <div className="flex items-center justify-center md:order-1">
                <div className="flex flex-col items-center justify-center gap-8 w-full min-h-[350px] md:min-h-[350px] sm:min-h-[280px] bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-3xl text-white p-12 md:p-12 sm:p-8 relative shadow-[0_10px_30px_-5px_rgba(30,64,175,0.3)]">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)] rounded-3xl pointer-events-none"></div>
                  <FileText size={80} className="opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-10" />
                  <p className="text-xl font-bold text-white text-shadow-[0_2px_8px_rgba(0,0,0,0.2)] z-10 text-center leading-relaxed">
                    Contrats & Paiements<br />automatisés
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 md:order-2">
                <div className="inline-flex p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-[1.25rem] w-fit shadow-[0_8px_20px_-4px_rgba(37,99,235,0.3)]">
                  <Building2 size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-2">
                  CRM pour la gestion locative
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Centralisez la gestion de vos propriétés, locataires et contrats de location
                  dans une seule interface intuitive et puissante.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <Building2 size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Gestion des propriétés et inventaire</span>
                  </li>
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <Users size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Suivi des locataires et contacts</span>
                  </li>
                  <li className="flex items-center gap-4 text-[1.05rem] text-gray-700 px-5 py-3.5 bg-slate-50 rounded-xl border-l-[3px] border-blue-500 transition-all hover:bg-slate-100 hover:translate-x-1">
                    <FileText size={18} className="text-blue-500 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-[0_2px_8px_rgba(59,130,246,0.15)]" />
                    <span>Contrats et paiements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">10+</div>
            <div className="text-lg text-gray-600 font-medium">Villes couvertes</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">15K+</div>
            <div className="text-lg text-gray-600 font-medium">Propriétés analysées</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">100%</div>
            <div className="text-lg text-gray-600 font-medium">Données actualisées</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Commencez à optimiser vos investissements locatifs</h2>
          <p className="text-xl mb-8 opacity-95">
            Rejoignez les investisseurs et gestionnaires immobiliers qui utilisent DaraLouer
            pour prendre des décisions éclairées et gérer efficacement leur patrimoine.
          </p>
          <Link to="/login" className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)]">
            Accéder à la plateforme
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-xl font-bold">
            <img src="/daralouer-icon.png" alt="DaraLouer" className="w-6 h-6 object-contain" />
            <span>DaraLouer</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 DaraLouer. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
