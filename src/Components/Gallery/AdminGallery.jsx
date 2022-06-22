import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminGallery = ({ adminData }) => {
  const [gdata, setGalleryData] = useState([]);
  const [unSeenNoti, setUnseenNoti] = useState([]);

  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);

  const { gid } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/picture/get")
      .then((result) => {
        // console.log(result.data.pname);
        setGalleryData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

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

  const deleteImage = (gid) => {
    axios
      .delete("http://localhost:5000/picture/image-delete/" + gid)
      .then(() => {
        console.log("image deletex");
      });
  };

  const headers = [
    { key: "pic", label: "Product Image" },
    { key: "pdesc", label: "Description" },
    { key: "action", label: "Action" },
  ];

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />

        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            {/* implementing conditions for products in cart */}
            {gdata.length === 0 ? (
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-12">
                    <Link to="/add-picture" className="btn btn-info">
                      Add Image
                    </Link>
                    <h3 className="m-5">
                      There is no any image added to your gallery!!!
                    </h3>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row justify-content-center">
                        <div className="col-md-8 col-12">
                          <Link
                            to="/add-picture"
                            className="btn btn-info me-auto float-end fw-bold text-white"
                          >
                            Add Image
                          </Link>
                          <div className="card my-5">
                            <div className="card-body">
                              <table class="table table-responsive">
                                <thead>
                                  <tr>
                                    {headers.map((row) => {
                                      return <th key={row.key}>{row.label}</th>;
                                    })}
                                  </tr>
                                </thead>
                                <tbody style={{ justifyContent: "center" }}>
                                  {/* for produdct added data  data : use loop*/}
                                  {gdata.map((items) => {
                                    return (
                                      <tr>
                                        <td>
                                          <img
                                            src={
                                              "http://localhost:5000/" +
                                              items.image
                                            }
                                            alt=""
                                            className="img-fluid"
                                            style={{
                                              maxWidth: "100px",
                                              maxHeight: "100px",
                                              borderRadius: "5px",
                                            }}
                                          />
                                        </td>

                                        <td>
                                          This is for the image short
                                          description
                                        </td>

                                        <td>
                                          <Link
                                            to={`/update-image/${items._id}`}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                          </Link>
                                          <span
                                            onClick={deleteImage.bind(
                                              this,
                                              items._id
                                            )}
                                            style={{ cursor: "pointer" }}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-trash-fill fa-2x text-danger"></i>
                                          </span>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminGallery;
