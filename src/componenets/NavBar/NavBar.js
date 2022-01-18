import './NavBar.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>
        News <span>Flash</span>
      </h1>
      <div className="nav-links">
        <Link to="arts" id="nav-link" className="news-sections">
          Arts
        </Link>
        <Link to="science" id="nav-link" className="news-sections">
          Science
        </Link>
        <Link to="us" id="nav-link" className="news-sections">
          US
        </Link>
        <Link to="world" id="nav-link" className="news-sections">
          World
        </Link>
        <Link to="business" id="nav-link" className="news-sections">
          Business
        </Link>
        <Link to="opinion" id="nav-link" className="news-sections">
          Opinion
        </Link>
        <Link to="politics" id="nav-link" className="news-sections">
          Politics
        </Link>
        <Link to="sports" id="nav-link" className="news-sections">
          Sports
        </Link>
        <Link to="home" id="nav-link" className="news-sections">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
