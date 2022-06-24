import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { WarnToast } from "../../utils/WarnToast";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminUpdateService = ({ adminData }) => {
  // for holding the particular category id
  const { sid } = useParams();
  const [serviceName, setSname] = useState("");
  const [serviceDesc, setSdesc] = useState("");
  const [servicePrice, setSprice] = useState("");
  const [image, setImage] = useState("");
  const [serviceCategoryName, setCategoryName] = useState("");
  const [unSeenNoti, setUnseenNoti] = useState([]);
  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  //   holding data

  const [sdata, setSData] = useState([]);
  // token for admin
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  //   for display category info initail when page is render
  useEffect(() => {
    axios
      .get("http://localhost:5000/service-category/get")
      .then((result) => {
        setCategoryData(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
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
    axios
      .get("http://localhost:5000/service/all-noti-unseen")
      .then((response) => {
        setUnseenNoti(response.data);
      })

      .catch(() => {
        console.log("error occur");
      });
  }, [unSeenNoti]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/get-single-service/${sid}`)
      .then((result) => {
        console.log(result.data);
        setSData(result.data);
        setCategoryName(result.data.serviceCategoryName);
        setSdesc(result.data.serviceDesc);
        setSname(result.data.serviceName);
        setSprice(result.data.servicePrice);
        setImage(result.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmitserviceData = (data, e) => {
    e.preventDefault();
    const serviceData = new FormData();
    serviceData.append("sid", sid);
    serviceData.append("serviceName", serviceName);
    serviceData.append("serviceDesc", serviceDesc);
    serviceData.append("servicePrice", servicePrice);
    serviceData.append("serviceCategoryName", serviceCategoryName);
    serviceData.append("image", image);

    axios
      .put(`http://localhost:5000/service/update-service/${sid}`, serviceData)

      .then((result) => {
        console.log(result.data);
        setCategoryName("")
        setSname("");
        setSdesc("");
        setSprice("");
        setImage("");

        // window.location = "/view-admin-products";
        toast.success(<UpdateToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        });
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };

  useEffect(() => {
    calculation();
  });

  // calculating total products number in cart
  const calculation = () => {
    setProductQtyCart(
      cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
    );
  };
  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />
        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            <div className="hori_line">
              <hr />
            </div>
            <div className="farm_product_heading container-fluid">
              <div className="row">
                <div className="col-md-12 mt-2 mb-3">
                  <h1>Update Service</h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* customer form */}
                          <form
                            method="POST"
                            onSubmit={handleSubmit(onSubmitserviceData)}
                            encType="multipart/form-data"
                          >
                            <label
                              htmlFor="serviceCategoryName"
                              className="fw-bold fs-4 pb-2"
                            >
                              Service Category
                            </label>
                            <div className="input-group">
                              <select
                                style={{
                                  border: "1px solid green",
                                  borderRadius: "5px",
                                  width: "100%",
                                  padding: "5px",
                                }}
                                value={serviceCategoryName}
                                onChange={(e) =>
                                  setCategoryName(e.target.value)
                                }
                                className="p-2"
                              >
                                <option value="">
                                  Please Choose Service Category
                                </option>
                                {/* using loop for display added category to product added form */}
                                {categoryData.map((d) => {
                                  return (
                                    <option value={d.serviceCategoryName}>
                                      {d.serviceCategoryName}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            {/* input field for product name */}
                            <div className="form-group">
                              <label htmlFor="pname">PService Name</label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errors.setSname && "invalid"
                                }`}
                                placeholder="Enter service name"
                                autoComplete="nope"
                                // firstname : validation
                                {...register("setSname", {
                                  required: "service name is required",
                                  minLength: {
                                    value: 3,
                                    message: "service name is too short",
                                  },
                                  maxLength: {
                                    value: 20,
                                    message: "service name is too long",
                                  },
                                })}
                                // changing data on typing and set data to product name variable and send to database
                                value={serviceName}
                                onChange={(e) => setSname(e.target.value)}
                              />
                              {/* for displaying error message on validating */}
                              {errors.setSname && (
                                <small className="text-danger">
                                  {errors.setSname.message}
                                </small>
                              )}
                            </div>
                            {/* input field for product pic */}
                            <div className="form-group">
                              <label htmlFor="file">Choose Service Pic</label>
                              <input
                                type="file"
                                name="pic"
                                className="form-control"
                                {...register("setImage", {
                                  required: "Choose product pic",
                                })}
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                              {errors.setImage && (
                                <small className="text-danger">
                                  {errors.setImage.message}
                                </small>
                              )}
                            </div>
                            {/* input field for product qty */}
                            {/* <div className="form-group">
                              <label htmlFor="pqty">pqty</label>
                              <input
                                type="phone"
                                className={`form-control ${
                                  errors.setPqty && "invalid"
                                }`}
                                placeholder="Enter qty number"
                                {...register("setPqty", {
                                  required: "qty is required",
                                  min: {
                                    value: 1,
                                    message:
                                      "Product qty should not be less than 1",
                                  },
                                  pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter digits only",
                                  },
                                })}
                                value={pqty}
                                onChange={(e) => setPqty(e.target.value)}
                              />
                              {errors.setpqty && (
                                <small className="text-danger">
                                  {errors.setPqty.message}
                                </small>
                              )}
                            </div> */}

                            {/* input field for product price*/}
                            <div className="form-group">
                              <label htmlFor="servicePrice">
                                Service Price
                              </label>
                              <input
                                type="phone"
                                className={`form-control ${
                                  errors.setSprice && "invalid"
                                }`}
                                placeholder="Enter service price"
                                {...register("setSprice", {
                                  required: "service price is required",
                                  pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter digits only",
                                  },
                                })}
                                value={servicePrice}
                                onChange={(e) => setSprice(e.target.value)}
                              />
                              {errors.setSprice && (
                                <small className="text-danger">
                                  {errors.setSprice.message}
                                </small>
                              )}
                            </div>
                            {/* input field for product desc */}
                            <div className="form-group">
                              <label htmlFor="serviceDesc">Description</label>
                              <textarea
                                type="text"
                                className={`form-control ${
                                  errors.setSdesc && "invalid"
                                }`}
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="write something for it"
                                {...register("setSdesc", {
                                  required: "description is required", // JS only: <p>error message</p> TS only support string
                                })}
                                value={serviceDesc}
                                onChange={(e) => setSdesc(e.target.value)}
                              ></textarea>
                              {errors.setSdesc && (
                                <small className="text-danger">
                                  {errors.setSdesc.message}
                                </small>
                              )}
                            </div>
                            <button
                              type="submit"
                              className="farm_product_add_btn btn btn-info mt-2 w-100 fw-bold text-white"
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
export default AdminUpdateService;
const UpdateToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated product !!! Click "OK" to continue..
            </p>
            <Link
              to="/view-services"
              className="btn btn-outline-success"
              style={{
                fontWeight: "bold",
                borderRadius: "15px",
                border: "2px solid green",
              }}
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
