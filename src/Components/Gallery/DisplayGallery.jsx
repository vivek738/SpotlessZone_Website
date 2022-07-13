import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgImg from "../../Images/first.png";
import Header from "../Homepage/Header";
import Spinner from "../Spinner/Spinner";
import UserHeader from "../UserDashboard/UserHeader";
import { parseJwt } from "../../utils/parseJwt";

const DisplayGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [isloading, setLoading] = useState(true);

  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?.user?._id;


  const myTimeOut = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/picture/get")
      .then((result) => {
        // console.log(result.data);
        myTimeOut();
        setGalleryData(result.data);
      })
      .catch((err) => {
        console.log(err);
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
        {user ? <UserHeader /> : <Header />}

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">Gallery</h1>
          <div className="row text-center">
            {
              user ? (
                <Link className="text-success fw-bold text-decoration-none" to="/user-dashboard">
              Dashboard &gt;&gt; <span className="text-white">Gallery</span>
            </Link>
              ): (
                <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Gallery</span>
            </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="container my-5">
        {/* <Link className="btn btn-primary float-end mt-3" to={`/add-picture`}>
          Add More
        </Link> */}
        <h1>{isloading && <Spinner />}</h1>
        <div className="row">
          {!isloading &&
            galleryData.map((gData) => {
              return (
                <div className="col-md-4">
                  <div
                    className="card m-3 shadow-lg"
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      height: "300px",
                      width: "350px",
                      // boxShadow: "1px 1px 1px 1px #94FFFF",
                    }}
                  >
                    {/* <div className="card-body"> */}
                    <div className="service_image_part">
                      <img
                        src={`http://localhost:5000/${gData.image}`}
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "300px",
                          width: "350px",
                          borderRadius: "10px",
                        }}
                        // style={{ borderRadius: "10px" }}
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default DisplayGallery;