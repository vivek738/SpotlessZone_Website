import React from 'react'

const Navbar = () => {
  return (
      <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="location-section col-md-2">
              <span>
                <i className="bi bi-geo-alt-fill"></i> kathmandu, Nepal
              </span>
            </div>
            <div className="contact-section  col-md-2">
              <span>
                <i className="bi bi-telephone-fill"></i> +977-9800834601
              </span>
            </div>
            <div className="col-md-6">
              <div className="instagram-section">
                <span className="mx-4">
                  <i className="bi bi-instagram"></i>
                </span>
              </div>
              <div className="facebook-section">
                <span className="mx-4">
                  <i className="bi bi-facebook"></i>
                </span>
              </div>
              <div className="twitter-section">
                <span className="mx-4">
                  <i className="bi bi-twitter"></i>
                </span>
              </div>
              <div className="login-section">
                <button className="loginBtn btn btn-outline-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ height: "2px", color: "#fff" }} />
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="container">
              {/* <a className="navbar-brand" href="/home">
              </a> */}
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link " href="/home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/home"
                      style={{
                        textDecoration: "none",
                        textTransform: "none",
                        fontSize: "2.5rem",
                        paddingTop: "4px",
                        fontFamily: "Times New Roman",
                        color: "#4eebeb",
                        borderRadius: "1px solid white",
                      }}
                    >
                      SpotlessZone
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      Contact
                    </a>
                  </li>
                  {/* <li className="nav-item dropdown"> */}
                  {/* <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a> */}
                  {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul> */}
                  {/* </li> */}
                </ul>
                {/* <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <span>
                  <i class="bi bi-search"></i>
                  </span>
                </form> */}
                <div className="searchBox">
                  <input
                    type="text"
                    placeholder="search"
                    className="searchText"
                  />
                  <a href="/home" className="searchBtn">
                    <i
                      className="bi bi-search"
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      </>
    
  )
}

export default Navbar