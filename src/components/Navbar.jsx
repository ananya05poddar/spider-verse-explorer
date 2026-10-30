
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SPIDER<span>VERSE</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Explore</Link>
      </div>

      <Link to="/gallery" className="nav-button">
        Enter Multiverse
      </Link>
    </nav>
  );
}

export default Navbar;
