import React, { useState } from "react";
import axios from "axios";
import "./BookService.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { WarnToast } from "../../utils/WarnToast";

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

const BookService = ({ serviceData, userData }) => {
  const [sdata, setSData] = useState("");
  const [address, setAddress] = useState("");

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  // console.log(userData.name)

  const bookService = (data, e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/service/book-service", {
        serviceDetails: serviceData,
        address: address,
        userId: userData._id,
      })
      .then((result) => {
        // console.log(result.serviceData);
        setSData(result.serviceData);
        setAddress("");
        toast.success(<SuccessServiceBookedToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch(() => {
        toast.error(<WarnToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <div className="card bg-info my-5 shadow-lg p-2">
        <h1 className="text-center fw-bold text-white my-3">Book Service</h1>
        <form onSubmit={handleSubmit(bookService)}>
          <div className="form-group">
            <label htmlFor="serviceName" className="text-white my-2 fw-bold">
              Service Name
            </label>
            <input
              type="text"
              placeholder="Service Name"
              className="form-control fw-normal fst-italic my-2"
              style={{ border: "1px solid green" }}
              autoComplete="off"
              value={serviceData.serviceName}
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
              value={serviceData.serviceCategoryName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicePrice" className="text-white my-2 fw-bold">
              Service Price
            </label>
            <input
              type="number"
              placeholder="Service Price"
              className="form-control fw-normal fst-italic my-2"
              style={{ border: "1px solid green" }}
              autoComplete="off"
              value={serviceData.servicePrice}
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
              onChange={handleChange}
            ></textarea>
            {errors.setAddress && (
              <small className="text-white fw-bold">
                {errors.setAddress.message}
              </small>
            )}
          </div>

          <input
            type="submit"
            id="submitBtn"
            className="bookBtn btn w-100 my-2 fw-bold text-uppercase bg-white "
            value="Book Now"
          />
        </form>
      </div>
    </>
  );
};

export default BookService;
