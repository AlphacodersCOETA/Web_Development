const { Link } = require("react-router-dom");

const Navbar = () => {
  return (
    <>
      {/* <div className="contain">
        <Link  to="/" className="id1">Home</Link>
        <Link to="/About"   className="id1">About us </Link>
        <Link to="/Contact"  className="id1">Contact Us</Link>
      </div> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/About" className="navbar-brand">
                  ABOUT US{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="navbar-brand">
               AWESOMENESS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Info" className="navbar-brand">
                 YOUR DETAILS
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
