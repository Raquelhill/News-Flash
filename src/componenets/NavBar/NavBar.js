import './NavBar.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>
        News <span>Flash</span>
      </h1>
      <div className="nav-links">
        <p className="news-sections">Home</p>
        <p className="news-sections">Arts</p>
        <p className="news-sections">Science</p>
        <p className="news-sections">US</p>
        <p className="news-sections">World</p>
        <p className="news-sections">Business</p>
        <p className="news-sections">Opinion</p>
        <p className="news-sections">Politics</p>
        <p className="news-sections">Sports</p>
      </div>
    </nav>
  );
};

export default Nav;
