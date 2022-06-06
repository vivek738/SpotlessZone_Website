import React, { useState } from "react";
import "./Addproduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { WarnToast } from "../../utils/WarnToast";
const Addproduct = () => {
  //this will come from database

  // ...................................................
  const [pname, setProductname] = useState("");
  const [pdesc, setProductdesc] = useState("");
  const [pprice, setProductprice] = useState("");
  const [pqty, setQuantity] = useState("");
  const [pic, setImage] = useState("");
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });
  // token for farm authorization

  // this will appear immediately on the screen when open pages
  // const productData = {
  //   pname: pname,
  //   pdesc: pdesc,
  //   pprice: pprice,
  //   pqty: pqty,
  // };
  const onSubmitAddProductData = (data, e) => {
   
    e.preventDefault();
    const productData = new FormData();
    productData.append("pname", pname);
    productData.append("pdesc", pdesc);
    productData.append("pprice", pprice);
    productData.append("pqty", pqty);
    productData.append("image", pic);
    axios
      .post("http://localhost:5000/product-add", productData)
      .then((result) => {
        console.log(result);
        if (result) {
          window.location = "/view-admin-products";
          toast.success(<ProductAddedSuccessToast />, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false,
          });
          setProductname("");
          setProductprice("");
          setQuantity("");
          setImage("");
          setProductdesc("");
        }
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };
  return (
    <>
      <div className="hori_line">
        <hr />
      </div>
      <div className="product_details_admin container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Enter Product Details</h1>
          </div>
        </div>
      </div>
      <div className="add_product_page container">
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    {/* customer form */}
                    <form
                      method="POST"
                      action=""
                      onSubmit={handleSubmit(onSubmitAddProductData)}
                      encType="multipart/form-data"
                    >
                      {/* input field for product name */}
                      <div className="form-group">
                        <label htmlFor="pname">Product Name</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.setProductname && "invalid"
                          }`}
                          placeholder="Enter product name"
                          autoComplete="nope"
                          // firstname : validation
                          {...register("setProductname", {
                            required: "product name is required",
                            minLength: {
                              value: 3,
                              message: "product name is too short",
                            },
                            maxLength: {
                              value: 20,
                              message: "product name is too long",
                            },
                          })}
                          // changing data on typing and set data to product name variable and send to database
                          value={pname}
                          onChange={(e) => setProductname(e.target.value)}
                          id="pname"
                        />
                        {/* for displaying error message on validating */}
                        {errors.setProductname && (
                          <small className="text-danger">
                            {errors.setProductname.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product image */}
                      <div className="form-group">
                        <label htmlFor="file">Choose Product Image</label>
                        <input
                          type="file"
                          name="image"
                          className="form-control"
                          {...register("setImage", {
                            required: "Choose product image",
                          })}
                          onChange={(e) => setImage(e.target.files[0])}
                          id="image"
                        />
                        {errors.setImage && (
                          <small className="text-danger">
                            {errors.setImage.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product qty */}
                      <div className="form-group">
                        <label htmlFor="pqty">Quantity</label>
                        <input
                          type="phone"
                          className={`form-control ${
                            errors.setQuantity && "invalid"
                          }`}
                          placeholder="Enter qty number"
                          {...register("setQuantity", {
                            required: "qty is required",
                            min: {
                              value: 1,
                              message: "Product qty should not be less than 1",
                            },
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "Enter digits only",
                            },
                          })}
                          value={pqty}
                          onChange={(e) => setQuantity(e.target.value)}
                          id="pqty"
                        />
                        {errors.setQuantity && (
                          <small className="text-danger">
                            {errors.setQuantity.message}
                          </small>
                        )}
                      </div>

                      {/* input field for product price*/}
                      <div className="form-group">
                        <label htmlFor="pprice">Product Price</label>
                        <input
                          type="phone"
                          className={`form-control ${
                            errors.setProductprice && "invalid"
                          }`}
                          placeholder="Enter product price"
                          {...register("setProductprice", {
                            required: "product price is required",
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "Enter digits only",
                            },
                          })}
                          value={pprice}
                          onChange={(e) => setProductprice(e.target.value)}
                          id="pprice"
                        />
                        {errors.setProductprice && (
                          <small className="text-danger">
                            {errors.setProductprice.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product desc */}
                      <div className="form-group">
                        <label htmlFor="pdesc">Description</label>
                        <textarea
                          type="text"
                          className={`form-control ${
                            errors.setProductdesc && "invalid"
                          }`}
                          id="exampleFormControlTextarea1"
                          rows="2"
                          placeholder="write something for it"
                          {...register("setProductdesc", {
                            required: "description is required", // JS only: <p>error message</p> TS only support string
                          })}
                          value={pdesc}
                          onChange={(e) => setProductdesc(e.target.value)}
                        ></textarea>
                        {errors.setProductdesc && (
                          <small className="text-danger">
                            {errors.setProductdesc.message}
                          </small>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="product_add_btn btn btn-info"
                        id="submitBtn"
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
    </>
  );
};
export default Addproduct;

const ProductAddedSuccessToast = () => {
  return (
    <>
      <p className="text-dark">
        You have successfully added new product !!! Click "OK" to continue..
      </p>
      <Link
        to="/view-admin-products"
        className="btn btn-outline-success"
        style={{
          fontWeight: "bold",
          borderRadius: "15px",
          border: "2px solid green",
          width: "100%",
          textAlign: "center",
        }}
      >
        OK
      </Link>
    </>
  );
};
