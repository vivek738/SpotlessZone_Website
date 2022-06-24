import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";
import First from "../../Images/first.png";
import Testimonial from "./Testimonial";
import ChooseUs from "./ChooseUs";
import AllServices from "../Services/AllServices";
import HomeGallery from "./HomeGallery";
import "./Homepage.css";

// let canUseDOM = !!(
//   (typeof window !== 'undefined' &&
//   window.document && window.document.createElement)
// );

// for success toast message
export const SuccessServiceBookedToast = () => {
  return (
    <>
      <p className="fw-bold text-success fst-italic">
        You have Booked the service appointment successfully
      </p>
    </>
  );
};

const Homepage = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  // handling submit form
  const bookAppointment = (data, e) => {
    e.preventDefault();
    console.log("herum nam");

    const appointmentData = {
      name: name,
      phone: phone,
      email: email,
      desc: desc,
    };

    // console.log(appointmentData)
    let url = axios.post(
      "http://localhost:5000/service/book-appointment",
      appointmentData
    );
    url
      .then((result) => {
        console.log(result.data);
        setName("");
        setPhone("");
        setEmail("");
        setDesc("");
        toast.success(<SuccessServiceBookedToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })

      .catch((err) => {
        console.log((err = "something went wrong"));
      });
  };
  return (
    <>
      <div>
        <div
          className="container-fluid homeImg py-3"
          style={{
            paddingTop: 0,
            backgroundColor: "#ebebeb",
            background: `url(${First})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "95vh",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Header />
          <div className="container col-md-10 mt-md-5 pt-md-5">
            <p
              className="text text-white h1 text-center"
              style={{ fontSize: "4rem" }}
            >
              Lets Clean Our Houses
              <br />
              By Using Spotless <br />
              Zone
            </p>
          </div>
        </div>

        {/* booking an appointment */}
        <div className="container">
          <div className="row">
            <div className="col-md-3 appointmentForm">
              <div className="card appointmentCard my-5 shadow-lg ">
                <h4 className="text-start fw-bold text-white my-4 ms-5">
                  Book an Appointment
                </h4>
                <form onSubmit={handleSubmit(bookAppointment)}>
                  {/* input field for customer firstname */}
                  <div className="form-group ms-4 mb-4 w-75 me-auto ms-auto d-block">
                    <input
                      type="text"
                      className={`form-control ${errors.setName && "invalid"}`}
                      placeholder="Your Name/Organization Name"
                      autoComplete="nope"
                      // firstname : validation
                      {...register("setName", {
                        required: "name is required",
                        minLength: {
                          value: 1,
                          message: "name is too short",
                        },
                        maxLength: {
                          value: 30,
                          message: "name is too long",
                        },
                      })}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/* for displaying error message on validating */}
                    {errors.setName && (
                      <small className="text-danger">
                        {errors.setName.message}
                      </small>
                    )}
                  </div>

                  {/* input field for customer contact number */}
                  <div className="form-group ms-4 mb-4 w-75 me-auto ms-auto d-block">
                    <input
                      type="phone"
                      className={`form-control ${errors.setPhone && "invalid"}`}
                      placeholder="Your phone number"
                      autoComplete="nope"
                      {...register("setPhone", {
                        required: "phone is required",
                        maxLength: {
                          value: 10,
                          message:
                            "Phone number should not exceed more that 10 digits",
                        },
                        minLength: {
                          value: 10,
                          message:
                            "Phone number should not less than 10 digits",
                        },
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Enter digits only",
                        },
                        // JS only: <p>error message</p> TS only support string
                      })}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.setPhone && (
                      <small className="text-danger">
                        {errors.setPhone.message}
                      </small>
                    )}
                  </div>

                  {/* input field for customer email */}
                  <div className="form-group ms-4 mb-4 w-75 me-auto ms-auto d-block">
                    <input
                      type="email"
                      className={`form-control ${errors.setEmail && "invalid"}`}
                      placeholder="Your email address"
                      autoComplete="nope"
                      {...register("setEmail", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        }, // JS only: <p>error message</p> TS only support string
                      })}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.setEmail && (
                      <small className="text-danger">
                        {errors.setEmail.message}
                      </small>
                    )}
                  </div>

                  {/* for description box */}
                  <div className="form-group ms-4 mb-4 w-75 me-auto ms-auto d-block">
                    <textarea
                      type="text"
                      className={`form-control fst-normal ${
                        errors.setDescription && "invalid"
                      }`}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Explain the service looking for..."
                      {...register("setDescription", {
                        required: "***Service Descriptiong is Required***",
                      })}
                      style={{ border: "1px solid green", fontStyle: "italic" }}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    {errors.setDescription && (
                      <small className="text-white fw-bold">
                        {errors.setDescription.message}
                      </small>
                    )}
                  </div>

                  <input
                    type="submit"
                    id="submitBtn"
                    className="appointmentBtn mb-4 ms-4 w-75 btn fw-bold text-uppercase bg-white mb-3 me-auto ms-auto d-block"
                    value="send Request"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="d-flex flex-wrap justify-content-center align-items-center w-100"
          style={{ position: "absolute", bottom: "-6%" }}
        >
          <div
            className="text-center bg-light rounded shadow"
            style={{ height: "auto" }}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center mx-4 my-3">
              <div className="me-md-5 me-2 mb-3">
                <p className="text text-secondary h5 mb-3">Choose Packages</p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Packages</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="me-md-5 me-2 mb-3">
                <p className="text text-secondary h5 mb-3">Choose Packages</p>
                <input type="date" className="form-control" />
              </div>
              <div className="me-md-5 me-2 mb-3">
                <p className="text text-secondary h5 mb-3">Phone Number</p>
                <input type="number" className="form-control" />
              </div>
              <div className="me-md-5 me-2 mb-3">
                <button className="btn btn-primary px-4">Book Now</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <ChooseUs />
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#EBEFED" }}
      >
        <div className="row text-center">
          <h1>Providing the Best Services for Our Customers</h1>
          <hr
            className=" bg-success w-50 m-auto my-3"
            style={{ height: "2px" }}
          />
        </div>
        <AllServices />
      </div>
      <Testimonial />
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <HomeGallery />
      </div>
    </>
  );
};

export default Homepage;
