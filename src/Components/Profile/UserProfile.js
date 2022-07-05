import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { parseJwt } from "../../utils/parseJwt";
import "./UserProfile.css";
import bgImg from "../../Images/first.png";
import UserSideBar from "./UserSideBar";
import UserHeader from "../UserDashboard/UserHeader";

const UserProfile = () => {
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

      <div className="container-fluid" style={{ backgroundColor: "#d9d9d9" }}>
        <div className="row">
          <UserSideBar />
          <div className="col-md-9">
            <h4 className="fw-normal mt-5 mb-4">Manage My Account</h4>
            <div className="row d-flex gap-4">
              <div
                className="col-md-4 bg-white"
                style={{ borderRadius: "5px" }}
              >
                <div className="container p-3">
                  <p>
                    Personal Profile <span>|</span>{" "}
                    <Link
                      to="/edit-profile"
                      className="text-decoration-none fw-bold"
                      style={{ color: "teal" }}
                    >
                      EDIT
                    </Link>
                  </p>
                  {/* <div className="personal-details"> */}
                  <span>{userdata?.name}</span>
                  <p>{userdata?.email}</p>
                  {/* </div> */}
                </div>
              </div>

              <div
                className="col-md-7 bg-white d-flex"
                style={{ borderRadius: "5px" }}
              >
                <div className="container p-3">
                  <p>
                    Address Book <span>|</span>{" "}
                    <Link
                      to="/user-dashboard"
                      className="text-decoration-none fw-bold"
                      style={{ color: "teal" }}
                    >
                      ADD
                    </Link>
                  </p>
                  <p>Save Your Shipping Address Here</p>
                  <i className="bi bi-geo-alt fa-2x text-success"></i>
                </div>
                <div className="verticle-line"></div>
                <div className="container p-3">
                  <p>Save Your Billing Address Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
