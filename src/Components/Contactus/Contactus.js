import React, { useEffect, useState } from "react";
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



  useEffect(() => {
    axios.get("http://localhost:5000/service/get")
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const contactData = {
    fname: fname, email: email, phone: phone, serviceName: serviceName, description: description,
  }
  const submitContact = (e) => {
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
  return (
    <>

      {/* <div className="image">
        <img src={pic} alt=""></img>
      </div>

      <div className="middle">
        <h4 className="heading mt-4">Contact Us</h4>
        <p>We are here to help and answer any question you might have. we look forward to hearing from you.</p>
      </div>
      <MDBContainer>
        <div className=" col-md-5 mx-auto">

          <form>
            <div className="mb-3">
              <input type="email" placeholder="Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"></input>
            </div>

            <div className="mb-3">
              <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>

        <div className="last ">
          <div className="row d-flex mt-5 justify-con">

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
      </MDBContainer> */}

      <div className="container-fluid homeImg py-3" style={{ paddingTop: 70, backgroundColor: "#ebebeb", background: `url(${First})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "50vh", backgroundSize: "cover", position: "relative" }}>
        <Header></Header>
        <div className="bread-crumb-section d-flex justify-content-center align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className='text-decoration-none fs-5 text-success'>Home</a>
              </li>
              <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* <p className = "mt-4 text-center text-success fw-bold">{message}</p> */}
      <MDBContainer className="main my-5">


        <form className="">
          <h4 className=" pt-4 fw-bold">Got any question?</h4>
          <h4 className="  fw-bold">Contact Us</h4>
          <div className="formm row mt-5">
            <div className="secondmain col-md-6 mb-3">
              <div class="row mb-3">



                <div class="col">
                  <input type="text" class="form-control" placeholder="Full Name" aria-label="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

              </div>


              <div class="row mb-3">
                <div class="col">
                  <input type="text" className="form-control mb-3" placeholder="Phone no" aria-label="Phone no" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>





              </div>




              <div className="mb-3">
                <textarea placeholder="Write a message" name="" id="" cols="30" rows="8" className="form-control" value={description} onChange={(e) => setDesc(e.target.value)} ></textarea>
              </div>

              <button className="btn btn-primary" onClick={submitContact}>SEND A MESSAGE</button>

            </div>

            <div className="col-md-6 mb-3">
              <div className="picture">
                <img src={pic} alt="" style={{ width: "100%" }} />

              </div>


            </div>

          </div>

        </form>





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



    </>
  );
};

export default Contactus;

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