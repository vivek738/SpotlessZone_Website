import { useState, useEffect } from "react";
import "./ServiceOrderHistory.css";
import img from "../../Images/first.png";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceOrderHistory = ({ adminData }) => {
  const [pdata, setProductData] = useState([]);
  const [noti, setNoti] = useState([]);
  const [serviceOrder, setServiceOrders] = useState([]);
  const [deliveryStatus, setStatus] = useState(false);
  const [pendingOrder, setPendingOrder] = useState([]);
  const [deliveredOrder, setDeliveredOrder] = useState([]);
  const [isPending, setIsPending] = useState(false)

// const orderTypes = ["All", "Pending", "In transit", "Delivered"]
// const [setOrderType, setOrderTypes] = useState("")
  // const { pid } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/get/product")
      .then((result) => {
        // console.log(result.data.pname);
        setProductData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/service/all-noti")
      .then((response) => {
        if (response) {
          // console.log(`checking 2nd cond: ${l.length}`)
          //   setNotiData(response.data);
          if (response.data) {
            setNoti(response.data);
            // console.log(response.data);
          }
        } else {
          console.log("all true");
        }
      })

      .catch(() => {
        console.log("error occur");
      });

    // for all order services data
    axios
      .get("http://localhost:5000/service/get-booked-service-details")
      .then((response) => {
        if (response) {
          // console.log(`checking 2nd cond: ${l.length}`)
          //   setNotiData(response.data);
          if (response.data) {
            setServiceOrders(response.data);
            // console.log(response.data);
          }
        } else {
          console.log("all true");
        }
      })

      .catch(() => {
        console.log("error occur");
      });

    // only for pending order services
    axios
      .get("http://localhost:5000/service/pending-service-orders")
      .then((response) => {
        if (response) {
          // console.log(`checking 2nd cond: ${l.length}`)
          //   setNotiData(response.data);
          if (response.data) {
            setPendingOrder(response.data);
            // console.log(response.data);
          }
        } else {
          console.log("all true");
        }
      })

      .catch(() => {
        console.log("error occur");
      });

    // only for pending order services
    axios
      .get("http://localhost:5000/service/delivered-service-orders")
      .then((response) => {
        if (response) {
          // console.log(`checking 2nd cond: ${l.length}`)
          //   setNotiData(response.data);
          if (response.data) {
            setDeliveredOrder(response.data);
            // console.log(response.data);
          }
        } else {
          console.log("all true");
        }
      })

      .catch(() => {
        console.log("error occur");
      });
  }, [serviceOrder, pendingOrder, deliveredOrder]);
  const handleApprove = (e, soid) => {
    e.preventDefault();
    const sod = {
      deliveryStatus: !deliveryStatus,
    };
    axios
      .put("http://localhost:5000/service/service-order-history/" + soid, sod)
      .then((result) => {
        if (result) {
          console.log("success");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeny = (e, soid) => {
    e.preventDefault();
    const sod = {
      deliveryStatus: deliveryStatus,
    };
    axios
      .put("http://localhost:5000/service/service-order-history/" + soid, sod)
      .then((result) => {
        if (result) {
          console.log("success");
        }
      })
      .catch((err) => console.log(err));
  };



 

  const logoutHandle = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <>
      {/* top wala */}

      <div className="container-fluid ps-0 py-3">
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <div className="p-1 ms-5">
                <a
                  href="#"
                  className="text-decoration-none fs-3 text-dark fw-bold"
                >
                  <span className="" style={{ color: "#25C6AA" }}>
                    S
                  </span>
                  potless{" "}
                  <span className="" style={{ color: "#25C6AA" }}>
                    Z
                  </span>
                  one
                </a>
              </div>
            </div>

            <div className="col-md-9">
              <div className="p-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-50 d-flex">
                    <p className="text text-dark fs-4 fw-bold">Overview</p>
                    <div className="w-100" style={{ marginLeft: "80px" }}>
                      <form>
                        <input
                          type="search"
                          className="form-control w-100"
                          placeholder="search here..."
                        />
                      </form>
                    </div>
                  </div>
                  <div className="w-50">
                    <div style={{ marginLeft: "210px" }}>
                      <button
                        type="button"
                        className="position-relative btn ps-2 pt-0 mx-3"
                      >
                        <i className="fa fa-bell"></i>
                        <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1">
                          {/* {noti.length} */}1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="position-relative btn ps-2 pt-0 me-3"
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1">
                          0
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </button>
                      <Link
                        className="btn btn-danger px-3 ms-5"
                        to="/addProduct"
                      >
                        Add Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 me-4">
          <div className="col-md-3">
            <div className="p-1">
              <div className="text-white">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <div className="bg-white text-dark p-3 rounded w-100">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="div">
                        <img
                          src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178__340.jpg"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div className="jj ms-3">
                        <p className="text text-dark fw-bold fs-6 mb-0">
                          {adminData.name}
                        </p>
                        <small className="text text-dark d-block">
                          {adminData.email}
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="my-3">
                    <p className="text text-secondary h6 mb-0 mx-3">Menu</p>
                  </div>

                  <div className="py-2 w-100 mx-2">
                    {/* first navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-th text-dark fs-5 me-4"></i>
                        <Link
                          className="text text-dark fs-5 mb-0 text-decoration-none"
                          to="/admin-dashboard"
                        >
                          Dashboard
                        </Link>
                      </div>
                    </a>
                    {/* second navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-sort text-dark fs-5 me-4"></i>
                        <Link
                          className="text text-dark fs-5 mb-0 text-decoration-none"
                          to="/service-order-history"
                        >
                          Order
                        </Link>
                      </div>
                    </a>
                    {/* third navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-shopping-bag text-dark fs-5 me-4"></i>
                        {/* <Link to="/display-all-products" className="text-decoration-none"><p className="text text-dark fs-5 mb-0">Product</p></Link> */}
                        <Link
                          className="text text-dark fs-5 mb-0 text-decoration-none"
                          to="/view-admin-products"
                        >
                          Products
                        </Link>
                      </div>
                    </a>
                    {/* fourth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-comment text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">Message</p>
                      </div>
                    </a>
                    {/* fourth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-calendar text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">Calendar</p>
                      </div>
                    </a>
                    {/* fourth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-map text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">Map</p>
                      </div>
                    </a>
                    {/* fifth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-cog text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">Settings</p>
                      </div>
                    </a>
                    {/* sixth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-question-circle text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">FAQ</p>
                      </div>
                    </a>
                    {/* sixth navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-question-circle text-dark fs-5 me-4"></i>
                        <p
                          className="text text-dark fs-5 mb-0"
                          onClick={logoutHandle}
                        >
                          LOGOUT
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            {/* implementing conditions for products in cart */}
            {serviceOrder.length === 0 ? (
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-12">
                    <h3 className="m-5">There is no any new orders...</h3>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div
                  className="container p-4 mt-5 orderContainer"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="row">
                    <div className="text">
                      <h1>Orders</h1>
                      {pendingOrder.length > 0 && (
                        <small>
                          Good Afternoon{" "}
                          <span className="fw-bold me-2">
                            {adminData.name}!
                          </span>
                          You have{" "}
                          <span className="fw-bold">{pendingOrder.length}</span>{" "}
                          pending orders.
                        </small>
                      )}
                      {pendingOrder.length === 0 && (
                        <small>
                          Good Afternoon{" "}
                          <span className="fw-bold me-2">
                            {adminData.name}!
                          </span>
                          You don't have any pending orders.
                        </small>
                      )}
                    </div>

                    {/* for card */}
                    {serviceOrder &&
                      serviceOrder.map((x) => {
                        return (
                          <div className="col-md-4" key={x._id}>
                            <div className="card p-2 orderCard m-3">
                              <div className="cusname-address-cost">
                                <div className="cusname-address">
                                  <h6>{x.userName}</h6>
                                  <div className="address-date">
                                    <div>
                                      <span className="fw-bold">
                                        {x.address}
                                      </span>
                                    </div>
                                    <small>{x.createdAt}</small>
                                  </div>
                                </div>

                                <div className="cost">
                                  <small className="fw-bold">
                                    ${x.totalServiceCost}
                                  </small>
                                </div>
                              </div>

                              <div className="image">
                                <img
                                  src={
                                    "http://localhost:5000/" +
                                    x.serviceDetails[0].image
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>

                              <hr />
                              <div className="deny-approve-buttons d-flex gap-4 ms-auto ">
                                <p
                                  className="text-muted fw-bold"
                                  onClick={(e) => handleDeny(e, x._id)}
                                >
                                  Deny
                                </p>
                                {x.deliveryStatus ? (
                                  <p
                                    className="text-success fw-bold"
                                    onClick={(e) => handleApprove(e, x._id)}
                                  >
                                    Approved
                                  </p>
                                ) : (
                                  <p
                                    className="text-primary fw-bold"
                                    onClick={(e) => handleApprove(e, x._id)}
                                  >
                                    Approve
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="row pt-5 pb-3 orderType">
                    <div className="col-md-1 fw-bold">
                      <div className="all">
                        <small>All</small>
                      </div>
                    </div>

                    <div className="col-md-1 fw-bold">
                      <div className="pending">
                        <small>Pending</small>
                        <div className="number">{pendingOrder.length}</div>
                      </div>
                    </div>

                    <div className="col-md-2 fw-bold">
                      <div className="transit">
                        <small>In transit</small>
                        <div className="number">1</div>
                      </div>
                    </div>

                    <div className="col-md-1 fw-bold">
                      <div className="delivered">
                        <small>Delivered</small>
                        <div className="number">{deliveredOrder.length}</div>
                      </div>
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
                        {serviceOrder && serviceOrder.map((x) => {
                          return (
                            <tr>
                              <td>{x.userName}</td>
                              <td>{x.address}</td>
                              <td>{x._id}</td>
                              <td>{x.createdAt}</td>
                              <td>$ {x.totalServiceCost}</td>
                              <div className="statusBtn">
                                {x.deliveryStatus ? (
                                  <td className="deliveredBtn">Delivered</td>
                                ) : (
                                  <td className="pendingBtn">Pending</td>
                                )}
                              </div>
                            </tr>
                          );
                        })}


                     

                       

                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceOrderHistory;
