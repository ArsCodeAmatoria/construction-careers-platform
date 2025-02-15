import { Link } from 'react-router-dom';
import emberLogo from '../images/ember.svg';

function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Embers Staffing</span>
            <img className="h-8 w-auto" src={emberLogo} alt="Embers Staffing" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 