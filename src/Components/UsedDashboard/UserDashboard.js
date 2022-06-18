
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserDashboard = ({ userData }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };
  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("token")
  const token = parseJwt(token_data)
  const userId = token?.user._id
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/show-own-order/${userId}`).then(res => {
      setData(res.data)
      console.log(res)
    }).catch(e => [
      console.log(e)
    ])
  }, [])

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
        <Header />

        {/* <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">Cart</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Cart</span>
            </Link>
          </div>
        </div> */}
      </div>
      <div className="bg-light container-fluid p-0">
        <div className="container col-md-8 py-4 mb-4">
          <p className="text text-center text-secondary fs-3 fw-bold">
            Customer Dashboard
          </p>
          <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
            <div className="desc">
              <p className="text text-primary fs-5">{userData.name}</p>
              <small className="d-block text-secondary mb-3">
                Enjoy yur free membership for lifetime access in our website.
              </small>
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-check-circle me-2"></i>
                <p className="text text-secondary mb-0">Earn Points</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-check-circle me-2"></i>
                <p className="text text-secondary mb-0">
                  Reedem points to get discount
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg"
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div>
                <a href="#" className="text-decoration-none">
                  View Profile
                </a>
                /
                <a
                  className="text-decoration-none text-danger fw-bold text-uppercase "
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded border p-3">
            <p className="text text-start text-secondary fs-5 fw-bold mb-0">
              Your Activity
            </p>
            <hr className="mt-0 mb-3" />
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-danger">On Track</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4">
                        View Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="p-2 bg-light rounded border">
                  <div className="d-flex justify-content-between align-items-center mx-3">
                    <div className="">
                      <p className="text text-secondary mb-0">
                        You have assigned create model task.
                      </p>
                      <span class="badge bg-success">Completed</span>
                    </div>
                    <div>
                      <button className="btn btn-primary px-4 disabled">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkout section */}
        <div className="container col-md-8 mb-4">

        </div>
        {/* checkout section */}
        <div className="container col-md-8 py-4 ">
          <div className="bg-white p-2">
            <div className="mx-3">
              <p className="text text-bold fs-5 p-2">
                Address Book
              </p>
              <div className="card my-5">
                <div className="card-body table-responsive">
                  <table class="table">
                    <thead>
                      <tr className="bg-light">
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                      {
                        data?.map(val => {
                          return (
                            <tr>
                              <td>{val?.firstname}</td>
                              <td>{val?.address_detail?.address}</td>
                              <td>{val?.address_detail.state}</td>
                              <td>{val?.phone}</td>
                              <td>
                                <button  
                                className="btn btn-link text-decoration-none"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                >EDIT</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                {/*  */}
                  {/* Button trigger modal */}
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Update Address Book
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                        <div className="px-4 bg-white py-3">
                                <form>
                                    <div className='bg-white'>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>First Name</label>
                                                    <input type="text" className="form-control" style={{ borderRadius: '0px' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>State</label>
                                                    <select className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Please select your state</option>
                                                        <option value='Bagmati'>Bagmati</option>
                                                        <option value='Lumbini'>Lumbini</option>
                                                        <option value='Karnali'>Karnali</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Phone no</label>
                                                    <input type="text" className="form-control" style={{ borderRadius: '0px' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>City</label>
                                                    <select  className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Please select your City</option>
                                                        <option  value='Kathmandu'>Kathmandu</option>
                                                        <option value='Lalitpur'>Lalitpur</option>
                                                        <option value='Bhaktapur'>Bhaktapur</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Area</label>
                                                    <select  className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Area</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Address</label>
                                                    <select className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Address</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Update Address
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* <div className="flex-btns" style={{ textAlign: "end" }}>
                          <button onClick={() => checkout.show({ amount: 1000, mobile: 9861905670 })} className="btn btn-warning">
                            Checkout
                          </button>
                          <Link
                            to="/display-all-products"
                            className="btn btn-info m-3"
                          >
                            Continue Shopping
                          </Link>
                        </div> */}
              </div>
              {/* <div className="table-responsive">
                <table className="table table-bordered" border="2">
                  <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>State</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>Vivek Sah</td>
                    <td>Santinagar</td>
                    <td>Bagmati</td>
                    <td>980834001</td>
                    <td><button className="btn btn-link fs-5 text-decoration-none">EDIT</button></td>
                  </tr>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
