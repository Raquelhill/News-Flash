import './NavBar.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>News Flash</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Arts</li>
        <li>Science</li>
        <li>US</li>
        <li>World</li>
      </ul>
    </nav>
  );
};

export default Nav;
