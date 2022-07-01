import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const AddServiceCategory = ({ adminData }) => {
  const [serviceCategoryName, setCategoryName] = useState("");
  const [serviceCategoryDesc, setCategoryDesc] = useState("");
  const [unSeenNoti, setUnseenNoti] = useState([]);
  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  useEffect(() => {
    axios
      .get("http://localhost:5000/service/all-noti-unseen")
      .then((response) => {
        setUnseenNoti(response.data);
      })

      .catch(() => {
        console.log("error occur");
      });
    axios
      .get("http://localhost:5000/get-total-products-cart")
      .then((response) => {
        if (response) {
          console.log(response.data[0].productQuantity);
          setCart(response.data);
        } else {
          console.log("Something went wrong");
        }
      })

      .catch(() => {
        console.log("error occur");
      });
  }, [unSeenNoti]);

  useEffect(() => {
    calculation();
  });

  // calculating total products number in cart
  const calculation = () => {
    setProductQtyCart(
      cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
    );
  };

  const submitAddHandler = (data, e) => {
    e.preventDefault();

    const serviceCategoryData = {
      serviceCategoryName: serviceCategoryName,
      serviceCategoryDesc: serviceCategoryDesc,
    };

    axios
      .post("http://localhost:5000/service-category/add", serviceCategoryData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => {
        console.log("something is wrong");
      });
  };

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />

        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                  <div className="card py-3 px-2">
                    <h3 className="text-center">Add Category For Services</h3>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* customer form */}

                          <form
                            method="POST"
                            action=""
                            onSubmit={handleSubmit(submitAddHandler)}
                            encType="multipart/form-data"
                          >
                            {/* input field for category name */}
                            <div className="form-group my-3">
                              <label
                                htmlFor="serviceCategoryName"
                                className="py-2 fw-bold"
                              >
                                Category Name
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errors.setCategoryName && "invalid"
                                }`}
                                placeholder="Enter category name"
                                autoComplete="nope"
                                // firstname : validation
                                {...register("setCategoryName", {
                                  required: "category name is required",
                                  maxLength: {
                                    value: 20,
                                    message: "category name is too long",
                                  }, // JS only: <p>error message</p> TS only support string
                                })}
                                // changing data on typing and set data to firstname variable and send to database
                                value={serviceCategoryName}
                                onChange={(e) =>
                                  setCategoryName(e.target.value)
                                }
                              />
                              {/* for displaying error message on validating */}
                              {errors.setCategoryName && (
                                <small className="text-danger">
                                  {errors.setCategoryName.message}
                                </small>
                              )}
                            </div>

                            {/* input field for category image
                      <div className="form-group">
                        <label htmlFor="file">Choose Category Image</label>
                        <input
                          type="file"
                          name="image"
                          className="form-control"
                          {...register("setImage", {
                            required: "Choose category image",
                          })}
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                        {errors.setImage && (
                          <small className="text-danger">
                            {errors.setImage.message}
                          </small>
                        )}
                      </div> */}

                            {/* input field for category desc */}
                            <div className="form-group my-3">
                              <label
                                htmlFor="serviceCategoryDesc"
                                className="py-2 fw-bold"
                              >
                                Description
                              </label>
                              <textarea
                                type="text"
                                className={`form-control ${
                                  errors.setCategoryDesc && "invalid"
                                }`}
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="write something for it"
                                {...register("setCategoryDesc", {
                                  required: "description is required",
                                })}
                                value={serviceCategoryDesc}
                                onChange={(e) =>
                                  setCategoryDesc(e.target.value)
                                }
                              ></textarea>
                              {errors.setCategoryDesc && (
                                <small className="text-danger">
                                  {errors.setCategoryDesc.message}
                                </small>
                              )}
                            </div>

                            <button
                              type="submit"
                              className="btn btn-info w-100 text-white text-uppercase fw-bold"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
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
export default AddServiceCategory;
