import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgImg from "../../Images/first.png";
import Header from "../Homepage/Header";
import Spinner from "../Spinner/Spinner";
const DisplayGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [isloading, setLoading] = useState(true);
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
        <Header />

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">Gallery</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Gallery</span>
            </Link>
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
<<<<<<< HEAD
                      maxHeight: "200px",
                      maxWidth: "300px"
=======
                      height: "300px",
                      width: "350px",

>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
                      // boxShadow: "1px 1px 1px 1px #94FFFF",
                    }}
                  >
                    {/* <div className="card-body"> */}
                    <div className="service_image_part">
                      <img
                        src={`http://localhost:5000/${gData.image}`}
                        alt=""
                        className="img-fluid"
<<<<<<< HEAD
                        // style={{ height: "320px", width: "350px" }}
                        style={{ borderRadius: "10px", maxHeight: "200px", minWidth: "300px" }}
=======
                        style={{
                          height: "300px",
                          width: "350px",
                          borderRadius: "10px",
                        }}
                        // style={{ borderRadius: "10px" }}
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
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
