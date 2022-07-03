import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Contactus.css";
import pic from "../../Images/faq.jpg";
import First from "../../Images/first.png";
import { MDBContainer } from "mdb-react-ui-kit";
import Header from "../Homepage/Header";
import { toast } from "react-toastify";
const Contactus = () => {
  const [sdata, setData] = useState([]);
  const [fullName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceName, setSName] = useState("");
  const [description, setDesc] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/service/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const contactData = {
    fullName: fullName,
    email: email,
    phone: phone,
    serviceName: serviceName,
    description: description,
  };
  const submitContact = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/contactus", contactData)
      .then((response) => {
        console.log(response);
        toast.success(<SendMessageToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        setFname("");
        setEmail("");
        setPhone("");
        setSName("");
        setDesc("");
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
          background: `url(${First})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header></Header>
        <div className="bread-crumb-section d-flex justify-content-center align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none fs-5 text-success">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item active fs-5 text-white"
                aria-current="page"
              >
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <MDBContainer className="main my-5 px-4">
        <div>
          <h2 className="text-white fs-4 text-uppercase fw-bold py-4">
            Get in Touch...
          </h2>
        </div>
        <form>
          <h3 className="text-center text-white pb-3">Contact for Services</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div class="row mb-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control p-2"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    value={fullName}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control p-2"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <input
                    type="text"
                    className="form-control mb-3 p-2"
                    placeholder="Phone No"
                    aria-label="Phone no"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <select
                    style={{
                      border: "1px solid green",
                      borderRadius: "5px",
                      width: "100%",
                      padding: "5px",
                    }}
                    value={serviceName}
                    onChange={(e) => setSName(e.target.value)}
                    className="p-2"
                  >
                    <option value="">Please Choose Service Category</option>
                    {/* using loop for display added category to product added form */}
                    {sdata.map((d) => {
                      return (
                        <option value={d.serviceName}>{d.serviceName}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Write Messages..."
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <button
                className="btn text-white ms-auto float-end p-2 fw-bold"
                style={{ backgroundColor: "#FBD961", borderRadius: "50px" }}
                onClick={submitContact}
              >
                SEND A MESSAGE
              </button>
            </div>
            <div className="col-md-6 mb-3">
              <div className="picture">
                <img src={pic} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </form>
      </MDBContainer>
    </>
  );
};
export default Contactus;
const SendMessageToast = () => {
  return (
    <>
      <p className="text-dark fw-bold">You have successfully send message</p>
    </>
  );
};