import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const UpdateCategoryService = ({ adminData }) => {
  const { scid } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [serviceCategoryName, setServiceCategoryName] = useState("");
  const [serviceCategoryDesc, setServiceCategoryDesc] = useState("");
  const [unSeenNoti, setUnseenNoti] = useState([]);

  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    axios
      .get(
        `http://localhost:5000/service-category/get-single-service-category/${scid}`
      )
      .then((result) => {
        setCategoryData(result.data);
        setServiceCategoryName(result.data.serviceCategoryName);
        setServiceCategoryDesc(result.data.serviceCategoryDesc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/service/all-noti-unseen")
      .then((response) => {
        setUnseenNoti(response.data);
      })

      .catch(() => {
        console.log("error occur");
      });

    // for total number of registered users
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
    // for total price
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

  const categoryServiceData = {
    scid: scid,
    serviceCategoryName: serviceCategoryName,
    serviceCategoryDesc: serviceCategoryDesc,
  };

  const submitUpdateHandler = async (data, e) => {
    e.preventDefault();
    await axios
      .put(
        "http://localhost:5000/service-category/update",
        categoryServiceData,
        scid
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />
        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 mt-5">
                  <div className="card">
                    <h4 className="text-center fw-bold mt-3">Update Service Category</h4>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <form
                            method="POST"
                            onSubmit={handleSubmit(submitUpdateHandler)}
                            encType="multipart/form-data"
                          >
                            {/* input field for category name */}
                            <div className="form-group my-2">
                              <label htmlFor="serviceCategoryName" className="fw-bold py-2">
                                Category Name
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errors.setServiceCategoryName && "invalid"
                                }`}
                                placeholder="Enter category name"
                                autoComplete="nope"
                                // firstname : validation
                                {...register("setServiceCategoryName", {
                                  required: "category name is required",
                                  maxLength: {
                                    value: 20,
                                    message: "category name is too long",
                                  }, // JS only: <p>error message</p> TS only support string
                                })}
                                // changing data on typing and set data to firstname variable and send to database
                                value={serviceCategoryName}
                                onChange={(e) =>
                                  setServiceCategoryName(e.target.value)
                                }
                              />
                              {/* for displaying error message on validating */}
                              {errors.setCategoryName && (
                                <small className="text-danger">
                                  {errors.setServiceCategoryName.message}
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
                            <div className="form-group my-2">
                              <label htmlFor="serviceCategoryDesc" className="fw-bold py-2">
                                Description
                              </label>
                              <textarea
                                type="text"
                                className={`form-control ${
                                  errors.setServiceCategoryDesc && "invalid"
                                }`}
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="write something for it"
                                {...register("setServiceCategoryDesc", {
                                  required: "description is required",
                                })}
                                value={serviceCategoryDesc}
                                onChange={(e) =>
                                  setServiceCategoryDesc(e.target.value)
                                }
                              ></textarea>
                              {errors.setServiceCategoryDesc && (
                                <small className="text-danger">
                                  {errors.setServiceCategoryDesc.message}
                                </small>
                              )}
                            </div>

                            <button type="submit" className="btn btn-info w-100 fw-bold text-white text-uppercase my-2">
                              Update Service
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

export default UpdateCategoryService;
