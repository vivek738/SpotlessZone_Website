import React, { useState } from "react";
import axios from "axios";
import "./BookService.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { WarnToast } from "../../utils/WarnToast";
import bgImg from "../../Images/first.png";
import Header from "../Homepage/Header";
import { Link } from "react-router-dom";

// for success toast message
export const SuccessServiceBookedToast = () => {
  return (
    <>
      <p className="fw-bold text-success fst-italic">
        You have Booked the service successfully
      </p>
    </>
  );
};

const TestBookService = () => {
  const [address, setAddress] = useState("");
  const [serviceName, setServiceName] = useState("");

  const [servicePrice, setServicePrice] = useState("");

  const [serviceCategoryName, setServiceCategory] = useState("");

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  // console.log(userData.name)

  const bookService = (data, e) => {
    e.preventDefault();
    const sData = {
      serviceName: serviceName,
      serviceCategoryName: serviceCategoryName,
      servicePrice: servicePrice,
      address: address,
    };

    axios
      .post("http://localhost:5000/service/book-service", {
        sData: sData,
      })
      .then((result) => {
        if (result) {
          setAddress("");
          toast.success(<SuccessServiceBookedToast />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      })
      .catch(() => {
        toast.error(<WarnToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
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
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header />

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">
            Testing Service
          </h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Testing Service</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
            <p>This is the testing service</p>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="card bg-info my-5 shadow-lg p-2">
              <h1 className="text-center fw-bold text-white my-3">
                Book Service
              </h1>
              <form onSubmit={handleSubmit(bookService)}>
                <div className="form-group">
                  <label
                    htmlFor="serviceName"
                    className="text-white my-2 fw-bold"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    placeholder="Service Name"
                    className="form-control fw-normal fst-italic my-2"
                    style={{ border: "1px solid green" }}
                    autoComplete="off"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    id="serviceName"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="serviceCategoryName"
                    className="text-white my-2 fw-bold"
                  >
                    Service Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="Service Category Name"
                    className="form-control fw-normal fst-italic my-2"
                    style={{ border: "1px solid green" }}
                    autoComplete="off"
                    value={serviceCategoryName}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    id="serviceCategoryName"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="servicePrice"
                    className="text-white my-2 fw-bold"
                  >
                    Service Price
                  </label>
                  <input
                    type="number"
                    placeholder="Service Price"
                    className="form-control fw-normal fst-italic my-2"
                    style={{ border: "1px solid green" }}
                    autoComplete="off"
                    value={servicePrice}
                    onChange={(e) => setServicePrice(e.target.value)}
                    id="servicePrice"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="text-white my-2 fw-bold">
                    Address
                  </label>
                  <textarea
                    type="text"
                    className={`form-control ${errors.setAddress && "invalid"}`}
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Enter Your Address"
                    {...register("setAddress", {
                      required: "***Address is Required***",
                    })}
                    style={{ border: "1px solid green", fontStyle: "italic" }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                  {errors.setAddress && (
                    <small className="text-white fw-bold">
                      {errors.setAddress.message}
                    </small>
                  )}
                </div>

                <input
                  type="submit"
                  className="bookBtn btn w-100 my-2 fw-bold text-uppercase bg-white "
                  value="Book Now"
                  id="submitBtn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestBookService;
