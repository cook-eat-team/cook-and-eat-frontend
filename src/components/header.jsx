import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
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
                src="/images/logo.png"
                alt="Logo"
                className="h-12 lg:h-16"
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">TOUTES LES RECETTES</Link></li>
              <li><Link to="/account">Mon compte</Link></li>
              <li></li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Link to='/account'>
                    <img
                      alt="Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <a className="btn"><Link to="/register">Créer un compte</Link></a>
            <a className="btn"><Link to='/logout'>Logout</Link></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

