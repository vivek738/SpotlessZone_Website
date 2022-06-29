import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./sp.css";
import axios from "axios";
import bgImg from "../../Images/first.png";
import Header from "../Homepage/Header";

export const SuccessMsg = () => {
  return (
    <>
      <p className="fw-bold text-success fst-italic">
        You have added product to cart successfully!
      </p>
    </>
  );
};

const SingleProductInfo = () => {
  const { pid } = useParams();
  const [singleproductdata, setSingleproductdata] = useState([]);
  const [msg, setMsg] = useState(false);

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?.user._id;

  const addCart = (e) => {
    e.preventDefault();
    setMsg(false);
    axios
      .post("http://localhost:5000/add-to-cart", {
        pid: pid,
        user: userid,
        userId: user,
        productQuantity: singleproductdata.pqty
      })
      .then((result) => {
        toast.success(<SuccessMsg />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addToWishlist = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add-to-wishlist", {
        pid: pid,
        user: userid
      })
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          setMsg("You have added product to your wishlist");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onEnterCart = () => {
    let addCart = document.getElementById("addToCart");
    let goCart = document.getElementById("goToCart");
    addCart.disabled = true;
    goCart.disabled = true;
    setMsg(true);
  };

  const onLeaveCart = () => {
    let addCart = document.getElementById("addToCart");
    let goCart = document.getElementById("goToCart");
    addCart.disabled = false;
    goCart.disabled = false;
    setMsg(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/singleproduct/" + pid)
      .then((result) => {
        console.log(result.data);
        setSingleproductdata(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
      });
  }, []);

  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header />

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">
            {singleproductdata.pname}
          </h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt;{" "}
              <span className="text-white">{singleproductdata.pname}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center my-5">
          <div className="col-md-6">
            <div className=" mt-4">
              <img
                style={{ height: "500px", minWidth: "100%" }}
                src={"http://localhost:5000/" + singleproductdata.pic}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-4 shadow-lg">
              <span onClick={addToWishlist} className="ms-auto mx-3 mt-3">
                <i className="fas fa-heart"></i>
              </span>
              <h4 className="text-center my-3">
                Details of <span>{singleproductdata.pname}</span>
              </h4>

              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }}>
                  Product Name:{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                    {singleproductdata.pname}
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Brand:{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                    brand name
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Ratings:{" "}
                  <span>
                    <i className="bi bi-star-fill text-warning mx-1"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning mx-1"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning mx-1"></i>
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Price:{" "}
                  <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
                    Rs. {singleproductdata.pprice}
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Quantity:{" "}
                  <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
                    {singleproductdata.pqty}
                  </span>
                </h6>

                {user ? (
                  <>
                    <div>
                      <button
                        className="btn btn-outline-success m-"
                        style={{ width: "45%", fontWeight: "bold" }}
                        onClick={addCart}
                      >
                        Add To Cart
                      </button>
                      <Link
                        to={`/cart`}
                        className="btn  text-white m-2 "
                        style={{
                          width: "45%",
                          fontWeight: "bold",
                          backgroundColor: "#FF7518",
                        }}
                      >
                        Go To Cart
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div onMouseEnter={onEnterCart}>
                      <button
                        id="addToCart"
                        className="btn btn-success m-2"
                        style={{ width: "45%", fontWeight: "bold" }}
                      >
                        Add To Cart
                      </button>
                      <button
                        id="goToCart"
                        className="disabledCartBtn btn  text-white m-2 "
                        style={{
                          width: "45%",
                          fontWeight: "bold",
                          backgroundColor: "#FF7518",
                        }}
                      >
                        Go To Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            {msg ? (
              <div
                className="messagebox text-center"
                id="messageBox"
                onMouseLeave={onLeaveCart}
              >
                <div className="card cardBox">
                  <p className="loginInfoText">
                    Currently, it seems you are not logged in <br />
                    Please login to add and view products in cart <br />
                    <span className="ty">Thank You !</span>
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <h2 className="text-success text-center">{msg}</h2>
    </>
  );
};
export default SingleProductInfo;
