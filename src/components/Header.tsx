import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[1000]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-blue-600 no-underline transition-opacity hover:opacity-80">
          <img src="/daralouer-icon.png" alt="DaraLouer" className="w-7 h-7 object-contain" />
          <span>DaraLouer</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/login" className="px-5 py-2 text-gray-700 font-medium rounded-md transition-all hover:bg-gray-100">
            Se connecter
          </Link>
          <Link to="/login" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md transition-all hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm">
            Commencer gratuitement
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
