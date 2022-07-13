import axios from "axios";
import React, { useState, useEffect } from "react";
import bgImg from "../../Images/first.png";
import { parseJwt } from "../../utils/parseJwt";
import UserHeader from "../UserDashboard/UserHeader";
import UserSideBar from "./UserSideBar";

const ProductOrderHistory = () => {
  const [productOrder, setProductOrder] = useState([]);

  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?.user?._id;

  console.log(user);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/show-own-order/${user}`)
      .then((result) => {
        console.log(result.data);
        setProductOrder(result.data);
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
          height: "30vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <UserHeader />
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="row">
          <UserSideBar />
          <div className="col-md-9">
            <div
              className="container p-4 mt-5 orderContainer"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="row">
                <div className="text">
                  <h1>Orders</h1>
                </div>
              </div>
              <div
                className="row m-0 p-0"
                style={{ backgroundColor: "#fffcf7", borderRadius: "10px" }}
              >
                {/* search and filter */}
                <div className="container search-filter-container">
                  <div className="search-input-filter">
                    <div className="search-input">
                      <i className="bi bi-search"></i>
                      <input
                        type="text"
                        placeholder="Type to filter orders..."
                        className="search"
                      />
                    </div>

                    <div className="filter-icon">
                      <i className="bi bi-filter"></i>
                      <small>Filters</small>
                    </div>
                  </div>
                </div>
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Ordered By</th>
                      <th scope="col">Address</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Cost</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productOrder &&
                      productOrder.map((proOrder, _id) => {
                        return (
                          <tr key={proOrder._id}>
                            <td>{proOrder.fullname}</td>
                            <td>
                              {proOrder.address_detail.address +
                                " , " +
                                proOrder.address_detail.state +
                                " , " +
                                proOrder.address_detail.city}
                            </td>
                            <td>{proOrder._id}</td>
                            <td>{proOrder.orderAt}</td>
                            <td>Rs. {proOrder.total}</td>
                            <td
                              className="fw-bold text-info"
                              style={{
                                borderRadius: "50px",
                                padding: "7px 10px 7px 10px",
                                cursor: "pointer",
                              }}
                            >
                              Purchased
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOrderHistory;
