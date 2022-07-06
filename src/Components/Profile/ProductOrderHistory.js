import { useState, useEffect } from "react";
// import "./ServiceOrderHistory.css";
// import img from "../../Images/first.png";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AdminSidebar from "./AdminSidebar";
// import AdminHeader from "./AdminHeader";
import bgImg from "../../Images/first.png"
import Header from "../Homepage/Header";
import UserSideBar from "./UserSideBar";

const ProductOrderHistory = () => {
//   const [pdata, setProductData] = useState([]);
//   const [unSeenNoti, setUnseenNoti] = useState([]);
//   const [productOrder, setProductOrders] = useState([]);
//   const [deliveryStatus, setStatus] = useState(false);
//   const [pendingOrder, setPendingOrder] = useState([]);
//   const [deliveredOrder, setDeliveredOrder] = useState([]);




//   const [cart, setCart] = useState([]);
//   const [productQtyCart, setProductQtyCart] = useState([]);

//   // const orderTypes = ["All", "Pending", "In transit", "Delivered"]
//   // const [setOrderType, setOrderTypes] = useState("")
//   // const { pid } = useParams();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/get/product")
//       .then((result) => {
//         // console.log(result.data.pname);
//         setProductData(result.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
  

//     // for all order services data
//     axios
//       .get("http://localhost:5000/service/get-booked-service-details")
//       .then((response) => {
//         if (response) {
//           // console.log(`checking 2nd cond: ${l.length}`)
//           //   setNotiData(response.data);
//           if (response.data) {
//             setServiceOrders(response.data);
//             // console.log(response.data);
//           }
//         } else {
//           console.log("all true");
//         }
//       })

//       .catch(() => {
//         console.log("error occur");
//       });

//     // only for pending order services
//     axios
//       .get("http://localhost:5000/service/pending-service-orders")
//       .then((response) => {
//         if (response) {
//           // console.log(`checking 2nd cond: ${l.length}`)
//           //   setNotiData(response.data);
//           if (response.data) {
//             setPendingOrder(response.data);
//             // console.log(response.data);
//           }
//         } else {
//           console.log("all true"); 
//         }
//       })

//       .catch(() => {
//         console.log("error occur");
//       });

//     // only for pending order services
//     axios
//       .get("http://localhost:5000/service/delivered-service-orders")
//       .then((response) => {
//         if (response) {
//           // console.log(`checking 2nd cond: ${l.length}`)
//           //   setNotiData(response.data);
//           if (response.data) {
//             setDeliveredOrder(response.data);
//             // console.log(response.data);
//           }
//         } else {
//           console.log("all true");
//         }
//       })

//       .catch(() => {
//         console.log("error occur");
//       });

//           // for total number of registered users
//     axios
//     .get("http://localhost:5000/get-total-products-cart")
//     .then((response) => {
//       if (response) {
//         console.log(response.data[0].productQuantity);
//         setCart(response.data);
//       } else {
//         console.log("Something went wrong");
//       }
//     })

//     .catch(() => {
//       console.log("error occur");
//     });
//     axios
//     .get("http://localhost:5000/service/all-noti-unseen")
//     .then((response) => {
//       setUnseenNoti(response.data);
//     })

//     .catch(() => {
//       console.log("error occur");
//     });
//   }, [serviceOrder, pendingOrder, deliveredOrder, unSeenNoti]);

//   useEffect(()=>{

//     calculation();
//   })
//    // calculating total products number in cart
//    const calculation = () => {
//     setProductQtyCart(
//       cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
//     );
//   };



//   const handleApprove = (e, soid) => {
//     e.preventDefault();
//     const sod = {
//       deliveryStatus: !deliveryStatus,
//     };
//     axios
//       .put("http://localhost:5000/service/service-order-history/" + soid, sod)
//       .then((result) => {
//         if (result) {
//           console.log("success");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleDeny = (e, soid) => {
//     e.preventDefault();
//     const sod = {
//       deliveryStatus: deliveryStatus,
//     };
//     axios
//       .put("http://localhost:5000/service/service-order-history/" + soid, sod)
//       .then((result) => {
//         if (result) {
//           console.log("success");
//         }
//       })
//       .catch((err) => console.log(err));
//   };
  return (
    <>
    
      {/* top wala */}
      

      {/* <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart}/>

        <div className="row py-4 me-4">
         <AdminSidebar adminData={adminData}/>

          <div className="col-md-9">
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
                            {adminData?.name}!
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
                            {adminData?.name}!
                          </span>
                          You don't have any pending orders.
                        </small>
                      )}
                    </div>

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
                        {serviceOrder &&
                          serviceOrder.map((x) => {
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
      </div> */}










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
        <Header />
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="row">
          <UserSideBar />
          <div className="col-md-9">
            <h4>Edit Profile</h4>
            <div className="card p-5 mt-4">
              <form method="post">
                <div className="ps-5 py-1 mt-4">
                  <div className="position-relative mt-4">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="me-5">
                        {("image") ? (
                          <img
                            // src={`http://localhost:5000/${image}`}
                            alt=""
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <img
                            src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                            alt=""
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                        <div
                          className="position-absolute"
                          style={{ bottom: "0px", left: "8%" }}
                        >
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            type="button"
                            className="btn btn-link text-decoration-none"
                          >
                            <i className="fa fa-pencil fs-6 text-white bg-danger rounded-circle p-2"></i>
                          </button>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Profile Pic Update
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <img
                                className="d-flex p-3 mx-auto"
                                width="200px"
                                // src={`http://localhost:5000/${image}`}
                                alt=""
                              />
                              <form>
                                <input
                                  name="image"
                                //   onChange={(e) => setPic(e.target.files[0])}
                                  type="file"
                                  className="form-control"
                                ></input>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                // onClick={update}
                                type="submit"
                                className="btn btn-primary"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        {/* <p className="tex text-dark h3 mb-1">{name}</p>
                        <p className="text text-secondary">{email}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <form>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="w-50 me-4">
                        <label htmlFor="firstnae" className="fw-bold h6">
                          Username
                        </label>
                        <input
                        //   value={name}
                        //   onChange={(e) => setname(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="w-50 me-4">
                        <label htmlFor="emailaddress" className="fw-bold h6">
                          Email Address
                        </label>
                        <input
                        //   value={email}
                        //   onChange={(e) => setmail(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="w-50 ms-4">
                        <label htmlFor="phonenumber" className="fw-bold h6">
                          Phone Number
                        </label>
                        <input
                        //   value={phone}
                        //   onChange={(e) => setphone(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="w-75 me-4">
                        <label htmlFor="bio" className="fw-bold h6">
                          Bio
                        </label>
                        <input
                        //   onChange={(e) => setbio(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <button
                    //   onClick={updateForm}
                      type="submit"
                      className="btn btn-info w-50 text-white text-uppercase fw-bold px-5"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </form>
            </div>
          </div>
        </div>
      </div>

       <div className="container col-md-8 my-5 px-5 bg-light">
        <div className="row">
          <div className="col-md-3">
            <div className="p-1">
              <p className="text text-dark text-center fs-2 h3 mb-5">
                User Profile
              </p>
              <div>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex justify-content-start align-items-center mb-4 border-end border-4 border-danger">
                    <i className="fas fa-user me-3 fs-5 text-primary"></i>
                    <p className="text text-primary mb-0 fs-5">My Order</p>
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex justify-content-start align-items-center mb-4">
                    <i className="fas fa-heart me-3 fs-5 text-primary"></i>
                    <p className="text text-primary mb-0 fs-5">Favourites</p>
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex justify-content-start align-items-center mb-4">
                    <i className="fas fa-star me-3 fs-5 text-primary"></i>
                    <p className="text text-primary mb-0 fs-5">Review</p>
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex justify-content-start align-items-center mb-4">
                    <i className="fas fa-address-book me-3 fs-5 text-primary"></i>
                    <p className="text text-primary mb-0 fs-5">Saved Address</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <form method="post">
              <div className="ps-5 py-1 mt-4">
                <div className="position-relative mt-4">
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="me-5">
                      {('image') ? (
                        <img
                        //   src={`http://localhost:5000/${image}`}
                          alt=""
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          src="https://cdn.pixabay.com/photo/2021/11/04/12/34/beauty-6768212__340.jpg"
                          alt=""
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                      <div
                        className="position-absolute"
                        style={{ bottom: "0px", left: "14%" }}
                      >
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          type="button"
                          className="btn btn-link text-decoration-none"
                        >
                          <i className="fa fa-pencil fs-6 text-white bg-danger rounded-circle p-2"></i>
                        </button>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Profile Pic Update
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <img
                              className="d-flex p-3 mx-auto"
                              width="200px"
                            //   src={`http://localhost:5000/${image}`}
                              alt=""
                            />
                            <form>
                              <input
                                name="image"
                                // onChange={(e) => setPic(e.target.files[0])}
                                type="file"
                                className="form-control"
                              ></input>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                            //   onClick={update}
                              type="submit"
                              className="btn btn-primary"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* <p className="tex text-dark h3 mb-1">{name}</p>
                      <p className="text text-secondary">{email}</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <form>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="w-50 me-4">
                      <label htmlFor="firstnae" className="fw-bold h6">
                        Username
                      </label>
                      <input
                        // value={name}
                        // onChange={(e) => setname(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="w-50 me-4">
                      <label htmlFor="emailaddress" className="fw-bold h6">
                        Email Address
                      </label>
                      <input
                        // value={email}
                        // onChange={(e) => setmail(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="w-50 ms-4">
                      <label htmlFor="phonenumber" className="fw-bold h6">
                        Phone Number
                      </label>
                      <input
                        // value={phone}
                        // onChange={(e) => setphone(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="w-75 me-4">
                      <label htmlFor="bio" className="fw-bold h6">
                        Bio
                      </label>
                      <input
                        // onChange={(e) => setbio(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <button 
                //   onClick={update} 
                  type="submit" className=" px-5">
                    Save Changes
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ProductOrderHistory;
