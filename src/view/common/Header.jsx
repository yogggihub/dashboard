import { Link, useNavigate } from "react-router-dom";
import javascript from "../../assets/imgs/logo.png";
const Header = () => {
  const redirect = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    redirect("/");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img alt="javascript" src={javascript} className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;
