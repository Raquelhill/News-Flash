import './NavBar.css';

const Nav = ({ setData }) => {
  return (
    <nav className="nav-bar">
      <h1>
        News <span>Flash</span>
      </h1>
      <button onClick={() => setData('arts')}>Arts</button>
      <button onClick={() => setData('science')}>Science</button>
      <button onClick={() => setData('us')}>US</button>
      <button onClick={() => setData('world')}>World</button>
      <button onClick={() => setData('business')}>Business</button>
      <button onClick={() => setData('opinion')}>Opinion</button>
      <button onClick={() => setData('politics')}>Politics</button>
      <button onClick={() => setData('home')}>Home</button>
    </nav>
  );
};

export default Nav;
