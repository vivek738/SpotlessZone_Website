import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { parseJwt } from "../../utils/parseJwt";
import "./UserProfile.css";
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import UserSideBar from "./UserSideBar";
import { toast } from "react-toastify";

const DeleteProfileToast = () => {
  const handleOk = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <>
      <p className="text-dark text-success fw-bold">
        You have deleted your profile data successfully ! <br /> Click "OK" to
        continue..
      </p>
      <button
        onClick={handleOk}
        className="btn btn-outline-success"
        style={{
          fontWeight: "bold",
          borderRadius: "15px",
          border: "2px solid green",
          width: "100%",
          textAlign: "center",
        }}
      >
        OK
      </button>
    </>
  );
};

const UserProfileView = () => {
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const id = token?.user._id;

  const [userdata, setuserdata] = React.useState({});

  const getProfile = () => {
    axios.get("http://localhost:5000/getprofile/" + id).then((data) => {
      setuserdata(data.data);
    });
  };
  useEffect(() => {
    getProfile();
  }, [userdata]);

  const deleteProfileHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/deleteprofile/${id}`)
      .then(() => {
        toast.success(<DeleteProfileToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#d9d9d9" }}>
        <div className="row">
          <UserSideBar />
          <div className="col-md-9">
            <h4 className="fw-normal mt-5 mb-4">My Profile</h4>

            <div className="row d-flex gap-4">
              <div
                className="col-md-7 bg-white py-4"
                style={{ borderRadius: "5px" }}
              >
                <div className="row">
                  <div className="col-md-6 text-center">
                    <div className="container p-3">
                      <div className="username-image d-flex flex-column gap-2">
                        <div className="img">
                          {userdata && userdata?.pic ? (
                            <img
                              src={`http://localhost:5000/${userdata?.pic}`}
                              className="img-fluid"
                              alt=""
                              width={`100`}
                              height={`100`}
                              style={{ borderRadius: "100%" }}
                            />
                          ) : (
                            <img
                              src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                              alt=""
                              width={`100`}
                              height={`100`}
                              style={{ borderRadius: "100%" }}
                            />
                          )}
                        </div>
                        <div className="user-name d-flex flex-column gap-2">
                          <span>Full Name</span>
                          <span className="fw-bold">{userdata?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="container p-3">
                      <div className="username-image d-flex flex-column gap-5 justify-content-center">
                        <div className="user-email d-flex flex-column gap-2">
                          <span>Email Address</span>
                          <span className="fw-bold">{userdata?.email}</span>
                        </div>
                        <div className="user-contact d-flex flex-column gap-2">
                          <span>Mobile</span>
                          <span className="fw-bold">{userdata?.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="edit-btn my-5">
                  <div className="buttons d-flex flex-row gap-5 justify-content-center">
                    <Link
                      to={`/edit-profile`}
                      className="btn text-uppercase text-white w-25"
                      style={{ backgroundColor: "#028090" }}
                    >
                      edit profile
                    </Link>
                    <button
                      onClick={(e) => deleteProfileHandler(e, userdata._id)}
                      className="btn btn-danger w-25 text-uppercase text-white"
                    >
                      delete profile
                    </button>
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

export default UserProfileView;
