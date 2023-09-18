// import { Header } from "./Header";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="react-logo.png" className="react-logo" />
        <ul className="nav-items">
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Why do this?</h1>
      <ol>
        <li>Interesting</li>
        <li>Need it for NextJS</li>
        <li>Gotta build my website</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Ryan. All rights reserved</small>
    </footer>
  );
}

function CustomPage() {
  return (
    <div>
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));
