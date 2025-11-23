import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/daralouer-icon.png" alt="DaraLouer" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
          <span>DaraLouer</span>
        </Link>

        <nav className="header-nav">
          <Link to="/login" className="btn-login">
            Se connecter
          </Link>
          <Link to="/login" className="btn-start">
            Commencer gratuitement
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
