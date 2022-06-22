import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { parseJwt } from "../../utils/parseJwt";
import "./Homepage.css";

const Header = () => {
  const [cart, setCart] = React.useState([]);
  const [productQtyCart, setProductQtyCart] = React.useState([]);

  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?.user._id;

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-total-products-cart")
      .then((response) => {
        if (response) {
          setCart(response.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch(() => {
        console.log("error occur");
      });
  }, [cart]);

  useEffect(() => {
    calculation();
  });

  // calculating total products number in cart
  const calculation = () => {
    setProductQtyCart(
      cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
    );
  };

  return (
    <>
      <div className="container-fluid bg-transparent text-white">
        <div className="container col-md-10 d-xl-block d-none text-white">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center ms-4">
              <div className="d-flex justify-content-start align-items-center me-5">
                <i className="fa fa-map-marker me-2"></i>
                <p className="text mb-0">Kathmandu</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-phone me-2"></i>
                <p className="text mb-0">+977-980959895</p>
              </div>
            </div>
            <div>
              <button className="btn btn-link text-white">
                <i className="fa fa-instagram fs-4"></i>
              </button>
              <button className="btn btn-link text-white">
                <i className="fa fa-facebook fs-4"></i>
              </button>
              <button className="btn btn-link text-white">
                <i className="fa fa-twitter fs-4"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="d-xl-block d-none" />
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid col-md-10 col-14">
            <a className="navbar-brand text-white" href="home/">
              <span className="fs-1" style={{ color: "#25C6AA" }}>
                S
              </span>
              POTLESS{" "}
              <span className="fs-1" style={{ color: "#25C6AA" }}>
                Z
              </span>
              ONE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                {user ? (
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link text-white header-link"
                      to="/user-dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item mx-3">
                    <Link className="nav-link text-white header-link" to="/">
                      Home
                    </Link>
                  </li>
                )}

                <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-white header-link"
                    to="/aboutus"
                  >
                    About
                  </Link>
                </li>
                {/* adding dropdowns for other */}
                <li className="frontpage_drop_down nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white header-link"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to="/all-commercial-services"
                    >
                      Commercial Services
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/all-residential-services"
                    >
                      Residential Services
                    </Link>
                  </div>
                </li>

                {/* closing dropdowns  */}
                {/* {localStorage.getItem("token") && <li className="nav-item mx-3">
                  <Link className="nav-link text-white" to={`/display-all-products`}>
                    Products
                  </Link>
                </li>} */}
                <Link
                  className="nav-link text-white header-link"
                  to={`/display-all-products`}
                >
                  Products
                </Link>
                <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-white header-link"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-white header-link"
                    to="/contactus"
                  >
                    Contacts
                  </Link>
                </li>
                {/* adding dropdowns for other */}
                <li className="frontpage_drop_down nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle text-white header-link"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Others
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                    <Link className="dropdown-item" to="/blogs">
                      Blogs
                    </Link>
                    <Link className="dropdown-item" to="/job-form-submit">
                      Job Recruit
                    </Link>
                  </div>
                </li>

                {/* closing dropdowns  */}
              </ul>
              <form className="d-flex justify-content-start align-items-center">
                <div
                  className="btn btn-link text-white"
                  style={{ position: "relative" }}
                >
                  <i
                    className="fa fa-search"
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "-18px",
                      alignItems: "center",
                      minWidth: "40px",
                      padding: "40px",
                      cursor: "pointer",
                      color: "teal",
                      fontSize: "20px",
                      justifyContent: "center",
                    }}
                  ></i>

                  <input
                    type="text"
                    placeholder="Search here..."
                    style={{
                      width: "100%",
                      textAlign: "start",
                      padding: "10px 10px 10px 40px",
                      borderRadius: "10px",
                      border: "1px solid teal",
                      justifyContent: "center",
                    }}
                  />
                </div>
                {!user && (
                  <Link className="btn btn-link text-white" to={`/login`}>
                    <i className="fa fa-user fa-2x"></i>
                  </Link>
                )}
                {user && (
                  <Link
                    to={`/cart`}
                    className="position-relative ps-2 pt-0 "
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <i className="fa fa-shopping-cart fa-2x text-white"></i>
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger ms-2 py-1">
                      {productQtyCart}
                    </span>
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
