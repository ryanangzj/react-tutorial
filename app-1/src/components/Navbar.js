import logo from "../images/react-logo.png";

export function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} className="navbar-logo"></img>
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
      </nav>
    </div>
  );
}
