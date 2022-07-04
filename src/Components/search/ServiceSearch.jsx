import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";

const ServiceSearch = (props) => {

    const query = useParams().query

    const [result, setResult] = useState([])
    const [isloading, setLoading] = useState(true);


    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:5000/service/search-service/'+query).then(function(res){
            console.log(res.data)
            setResult(res.data)
            setTimeout(() => {
                setLoading(false);
              }, 500);
        })
    },[])

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
          <h1 className="text-center text-white my-4 fw-bold">Services</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">All Services</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 text-center">
        <h1 className="text-success">
            Search Results For '{query}'
          {/* <br /> */}
          {/* <span className="fs-5">
            Believing on{" "}
            <span className="fw-normal fs-6">
              "Don't find Customers for your products instead find products for
              your customers".
            </span>
          </span>{" "} */}
        </h1>
      </div>

      {isloading && <Spinner />}

      {/* for product display */}
      <div className="allproduct_list container-fluid">
        <div className="container col-md-11 my-3">
          <div className="row">
            {!isloading &&
              result.map((allProductsdata) => {
                return (
                  <div className="text-center col-md-3">
                    <div
                      className="card my-3 px-0"
                      style={{
                        cursor: "pointer",
                        boxShadow: "2px 2px 2px 2px #94FFFF",
                        height: "400px",
                      }}
                    >
                      <div className="card-body">
                        <div
                          className="product_image_part text-center"
                          style={{ width: "90%", height: "40%" }}
                        >
                          <img
                            src={"http://localhost:5000/" + allProductsdata.image}
                            alt=""
                            className="img-fluid bghv"
                            style={{ height: "100%" }}
                          />
                        </div>
                        <div className="product_text">
                          <h3 className="text-center py-3">
                            {allProductsdata.serviceName}
                          </h3>
                          <h6
                            className="text-center"
                            style={{ fontStyle: "italic" }}
                          >
                            Rs{" "}
                            {allProductsdata.servicePrice }
                            </h6>
                        </div>
                        <Link
                          to={"/single-product/" + allProductsdata._id}
                          className="btn btn-info text-center w-75 ms-5 text-white text-uppercase my-3"
                          style={{ fontWeight: "bold" }}
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSearch