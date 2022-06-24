import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { WarnToast } from "../../utils/WarnToast";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminUpdateGallery = ({ adminData }) => {
  // for holding the particular category id
  const { gid } = useParams();
  const [image, setPic] = useState("");
  const [unSeenNoti, setUnseenNoti] = useState([]);

  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);
  //   holding data

  const [gdata, setGalleryData] = useState([]);
  // token for admin
  const {
    register,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  //   for display category info initail when page is render
  useEffect(() => {
    axios
      .get("http://localhost:5000/single-image/" + gid)
      .then((getResult) => {
        console.log(getResult.data.pic);
        setGalleryData(getResult.data);
        setPic(getResult.data.image);
      })
      .catch((err) => console.log(err));
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
  }, [gid, unSeenNoti]);

  const onSubmitProductUpdateForm = (e) => {
    e.preventDefault();
    const imageUpdateForm = new FormData();
    imageUpdateForm.append("gid", gid);
    imageUpdateForm.append("image", image);

    axios
      .put(`http://localhost:5000/picture/update-image/${gid}`, imageUpdateForm)

      .then((result) => {
        console.log(result.data);

        // window.location = "/view-admin-products";
        toast.success(<UpdateToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        });
        setPic("");
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
                  <h1>Update Product</h1>
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
                            onSubmit={onSubmitProductUpdateForm}
                            encType="multipart/form-data"
                          >
                            {/* input field for product pic */}
                            <div className="form-group">
                              <label htmlFor="file">Choose Product pic</label>
                              <input
                                type="file"
                                name="pic"
                                className="form-control"
                                {...register("setPic", {
                                  required: "Choose product pic",
                                })}
                                onChange={(e) => setPic(e.target.files[0])}
                              />
                              {errors.setpic && (
                                <small className="text-danger">
                                  {errors.setPic.message}
                                </small>
                              )}
                            </div>

                        
                            {/* input field for product desc */}
                            {/* <div className="form-group">
                              <label htmlFor="pdesc">Description</label>
                              <textarea
                                type="text"
                                className={`form-control ${
                                  errors.setPdesc && "invalid"
                                }`}
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="write something for it"
                                {...register("setPdesc", {
                                  required: "description is required", // JS only: <p>error message</p> TS only support string
                                })}
                                value={pdesc}
                                onChange={(e) => setPdesc(e.target.value)}
                              ></textarea>
                              {errors.setpdesc && (
                                <small className="text-danger">
                                  {errors.setPdesc.message}
                                </small>
                              )}
                            </div> */}
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
export default AdminUpdateGallery;
const UpdateToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated image !!! Click "OK" to continue..
            </p>
            <Link
              to="/admin-gallery"
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
