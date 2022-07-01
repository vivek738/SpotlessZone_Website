import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import './Contactus.css';
import pic from '../../Images/faq.jpg';
import First from '../../Images/first.png';
import phonecall from '../../Images/phonecall.png';
import gmail from '../../Images/gmail.png';
import placeholder from '../../Images/placeholder.png';
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from "../Homepage/Header";
import axios from "axios";
// import { set } from "react-hook-form";
import { toast } from "react-toastify";



const Contactus = () => {
  const [sdata, setData] = useState([])
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [serviceName, setSName] = useState("")
  const [description, setDesc] = useState("")
  // const [message, setMessage] = useState("")


=======
import "./Contactus.css";
import pic from "../../Images/faq.jpg";
import First from "../../Images/first.png";
import { MDBContainer } from "mdb-react-ui-kit";
import Header from "../Homepage/Header";
import axios from "axios";
import { toast } from "react-toastify";

const Contactus = () => {
  const [sdata, setData] = useState([]);
  const [fullName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceName, setSName] = useState("");
  const [description, setDesc] = useState("");
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74

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
<<<<<<< HEAD
    e.preventDefault()
    axios.post("http://localhost:5000/contactus", contactData)
      .then(response => {
        // setMessage("You have successfully set the message");
        toast.success(<SuccessToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        })
        setEmail("");
        setDesc("");
        setPhone("");
        setFname("");

        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })


  }
=======
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
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
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

<<<<<<< HEAD
      {/* <p className = "mt-4 text-center text-success fw-bold">{message}</p> */}
      <MDBContainer className="main my-5">


        <form className="">
          <h4 className=" pt-4 fw-bold">Got any question?</h4>
          <h4 className="  fw-bold">Contact Us</h4>
          <div className="formm row mt-5">
            <div className="secondmain col-md-6 mb-3">
=======
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
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
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

<<<<<<< HEAD




=======
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
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
              </div>
              <div className="mb-3">
<<<<<<< HEAD
                <textarea placeholder="Write a message" name="" id="" cols="30" rows="8" className="form-control" value={description} onChange={(e) => setDesc(e.target.value)} ></textarea>
=======
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
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
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
<<<<<<< HEAD





      </MDBContainer>
      <div className="last">
        <div className="row d-flex mt-5 ">

          <div className="col-md-4">
            <img src={phonecall} alt=""></img>
            <h5>Phone</h5>
            <p>940489374</p>

          </div>

          <div className="col-md-4">
            <img src={gmail} alt="" />

            <h5>E-mail</h5>
            <p>dipikabogat6@gmail.com</p>


          </div>

          <div className="col-md-4">
            <img src={placeholder} alt=""></img>

            <h5>Location</h5>
            <p>51 Street, Newyork City, NYPD
            </p>


          </div>
        </div>
      </div>



=======
      </MDBContainer>
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
    </>
  );
};

export default Contactus;

<<<<<<< HEAD
const SuccessToast = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="fw-bold text-success">
              You have successfully send the message.
            </p>
          </div>
        </div>
      </div>
    </>
  )
};
=======
const SendMessageToast = () => {
  return (
    <>
      <p className="text-dark fw-bold">You have successfully send message</p>
    </>
  );
};
>>>>>>> b15534e22a70c1c606007962bf77dd84cfc35a74
