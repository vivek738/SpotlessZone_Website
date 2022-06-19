import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import axios from "axios";
import { useEffect, useState } from "react";
import "./message.css";

const UserDashboard = ({ userData }) => {
  const [isHover, setHover] = useState(false);
  const [serviceOrder, setServiceOrders] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);


  useEffect(() => {
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
  }, [serviceOrder, pendingOrder]);

  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };
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
        <div className="container col-md-8 py-4">
          <p className="text text-center text-secondary fs-3 fw-bold">
            Customer Dashboard
          </p>

          <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
            <div className="desc">
              <div className="message fw-bold">
                <i
                  className="bi bi-envelope-fill"
                  onMouseEnter={() => setHover(true)}
                ></i>
                <div className="messageNumber">{pendingOrder.length}</div>
              </div>

              {isHover ? (
                <>
                  {" "}
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-md-12 ms-5 p-3"
                        onMouseLeave={() => setHover(false)}
                        style={{
                          borderRadius: "15px",
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        {serviceOrder.map((x) => {
                          return (
                            <div>
                              <h5>{x.serviceDetails[0].serviceName}</h5>
                              {x.deliveryStatus && (
                                <p>
                                  Your request is already{" "}
                                  <span className="fw-bold text-success">
                                    Approved
                                  </span>{" "}
                                  <br /> You will be contacted soon by our team
                                  members for providing your requested service{" "}
                                  <br /> Please be at home
                                  <br />
                                  <span className="fw-bold fs-7">Thank You !</span>
                                </p>
                              )}
                              {!x.deliveryStatus && (
                                <p>
                                  Your request is still in{" "}
                                  <span className="fw-bold text-warning">
                                    Pending
                                  </span>
                                  <br />
                                  Please be patience !
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

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
      </div>
    </>
  );
};

export default UserDashboard;
