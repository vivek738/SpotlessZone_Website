import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import "./services.css";
import Spinner from "../Spinner/Spinner";
import { parseJwt } from "../../utils/parseJwt";
import UserHeader from "../UserDashboard/UserHeader";


const AllResidentialServices = () => {
  const [residentialData, setResidentialData] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
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
    myTimeOut();
    axios
      .get("http://localhost:5000/service/get-residential-services")
      .then((result) => {
        // console.log(result.data);
        myTimeOut();
        setResidentialData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/service/residential-service")
      .then((result) => {
        // console.log(result.data.
        //   serviceCategoryName);
        myTimeOut();
        setCategoryName(result.data);
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
        {
          user ? (<UserHeader />) : (
        <Header />

          )
        }

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">
            {categoryName.serviceCategoryName}
          </h1>
          <div className="row text-center">
            {
              user ? (
                <Link className="text-success fw-bold text-decoration-none" to="/user-dashboard">
              Dashboard &gt;&gt;{" "}
              <span className="text-white">
                {categoryName.serviceCategoryName}
              </span>
            </Link>
              ): (
                <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt;{" "}
              <span className="text-white">
                {categoryName.serviceCategoryName}
              </span>
            </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="container">
        <h1>{isloading && <Spinner />}</h1>
        <div className="row">
          {!isloading &&
            residentialData.map((rData) => {
              return (
                <div className="col-md-4">
                  <div
                    className="resident-service-card card m-3 "
                    style={{
                      cursor: "pointer",
                      boxShadow: "2px 2px 2px 2px #94FFFF",
                      height: "50vh"
                    }}
                  >
                    <div className="card-body">
                      <div className="service_image_part c-image">
                        <img
                          src={`http://localhost:5000/${rData.image}`}
                          alt=""
                          className="img-fluid c-image"
                          // style={{ height: "100px", minWidth: "100px" }}
                        />
                      </div>
                      <div className="product_text">
                        <h3 className="py-3">{rData.serviceName}</h3>
                        <p>{rData.serviceDesc.slice(0, 60)}...</p>
                      </div>
                      <Link
                        to={`/single-service/${rData._id}`}
                        className="btn btn-info text-center text-white text-uppercase mb-3 fw-bold float-end"
                      >
                        Read More &gt;&gt;
                      </Link>
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

export default AllResidentialServices;
