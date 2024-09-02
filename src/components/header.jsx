import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../style/Header.css';

const Header = () => {

  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <header>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              </div>
            </div>
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-v2.png"
                alt="Logo"
                className="h-12 lg:h-16"
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {isAuthenticated && <li><Link to="/dashboard">Dashboard</Link></li>}
              <li><Link to="/">Toutes les recettes</Link></li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-2">            
            {!isAuthenticated && <a className="btn"><Link to="/register">Créer un compte</Link></a>}
            {!isAuthenticated && <a className="btn"><Link to="/login">Connexion</Link></a>}
            {isAuthenticated && <a className="btn"><Link to="/account">Mon compte</Link></a>}
            {isAuthenticated && <button className="btn" onClick={logout}>Déconnexion</button>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

