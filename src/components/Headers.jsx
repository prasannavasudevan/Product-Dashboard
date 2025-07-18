import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

  const linkStyle = (path) =>
    `transition-colors duration-200 hover:text-green-400 ${
      location.pathname === path ? 'text-green-400 font-semibold' : ''
    }`;

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            <Link to="/">
              Product Dashboard
            </Link>
          </h1>
          <nav className="flex space-x-10">
            <Link to="/" className={linkStyle('/')}>
                 Home
            </Link>
            <Link to="/favorites"  className={linkStyle('/favorites')}>
                 Favorites
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;