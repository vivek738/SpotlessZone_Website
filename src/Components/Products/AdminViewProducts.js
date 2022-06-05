import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import AdminDashboard from "../Admin/AdminDashboard"


// use reducer

const AdminProducts = ({adminData}) => {
  const [pdata, setProductData] = useState([]);
  const [noti, setNoti] = useState([]);

  const { pid } = useParams();

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
  });

  const deleteAdminProduct = (pid) => {
    axios.delete("http://localhost:5000/product-delete/" + pid).then(() => {
      console.log("item deletex");
    });
    console.log(pid);
  };

 
  const logoutHandle = () => {
    localStorage.clear();
    window.location = "/";
  };

  const headers = [
    { key: "pic", label: "Product Image" },
    { key: "pname", label: "Product Name" },
    { key: "pqty", label: "Quantity" },
    { key: "pdesc", label: "Description" },
    { key: "action", label: "Action" },
  ];

  return (
    <>

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
                          {noti.length}
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
                        <p className="text text-dark fs-5 mb-0">Dashboard</p>
                      </div>
                    </a>
                    {/* second navlink */}
                    <a href="#" className="nav-link w-100 my-2 mb-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <i className="fa fa-sort text-dark fs-5 me-4"></i>
                        <p className="text text-dark fs-5 mb-0">Order</p>
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
      {pdata.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-12">
              <Link to="/addProduct" className="btn btn-info">
                Add Product
              </Link>
              <h3 className="m-5">There is no any products to display!!!</h3>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-12">
                    <div className="card my-5">
                      <div className="card-body">
                        <table class="table table-responsive">
                          <thead>
                            <tr>
                              {headers.map((row) => {
                                return <th key={row.key}>{row.label}</th>;
                              })}
                            </tr>
                          </thead>
                          <tbody style={{ justifyContent: "center" }}>
                            {/* for produdct added data  data : use loop*/}
                            {pdata.map((items) => {
                              return (
                                <tr>
                                  <td>
                                    <img
                                      src={"http://localhost:5000/" + items.pic}
                                      alt=""
                                      className="img-fluid"
                                      style={{
                                        maxWidth: "100px",
                                        maxHeight: "100px",
                                        borderRadius: "5px",
                                      }}
                                    />
                                  </td>

                                  <td>
                                    <span
                                      style={{
                                        fontWeight: "600",
                                        marginLeft: "50px",
                                      }}
                                    >
                                      {items.pname}
                                    </span>
                                  </td>

                                  <td>
                                    <span
                                      style={{
                                        fontWeight: "600",
                                        marginLeft: "50px",
                                      }}
                                    >
                                      {items.pqty}
                                    </span>
                                  </td>

                                  <td>{items.pdesc}</td>

                                  <td>
                                    {/* <i
                                          className="bi bi-trash-fill"
                                          onClick={deleteAdminProduct.bind(
                                            this,
                                            items._id
                                          )}
                                          style={{
                                            cursor: "pointer",
                                            color: "red",
                                            fontSize: "1.2rem",
                                          }}
                                        ></i> */}
                                    {/* fkjkfj */}
                                    <Link
                                      to={`/update-product/${items._id}`}
                                      className="d-flex"
                                    >
                                      <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                    </Link>
                                    <span
                                      onClick={deleteAdminProduct.bind(
                                        this,
                                        items._id
                                      )}
                                      style={{ cursor: "pointer" }}
                                      className="d-flex"
                                    >
                                      <i className="bi bi-trash-fill fa-2x text-danger"></i>
                                    </span>
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
export default AdminProducts;
