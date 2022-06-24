import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminServiceCategory = ({ adminData }) => {
  const [serviceCategoryData, setServiceCategoryData] = useState([]);
  const [msg, setDeleteMsg] = useState("");
  const [unSeenNoti, setUnseenNoti] = useState([]);
  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/service-category/get")
      .then((result) => {
        console.log(result.data);
        setServiceCategoryData(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
      });
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
  const deleteCategory = (scid) => {
    axios
      .delete(`http://localhost:5000/service-category/delete/${scid}`)
      .then(() => {
        setDeleteMsg("You have successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const headers = [
    { key: "serviceCategoryName", label: "Service Category Name" },
    { key: "serviceCategoryDesc", label: "Description" },
    { key: "createdAt", label: "Added Date" },
    { key: "action", label: "Action" },
  ];

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />

        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mt-5">
                  <div className="card">
                    <div className="add_category_btn">
                      <Link
                        to="/add-service-category"
                        className="btn btn-outline-success"
                        style={{
                          float: "right",
                          margin: "10px 10px 0 0",
                          border: "2px solid green",
                          borderRadius: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Add New Category
                      </Link>
                    </div>
                    <h3 className="text-center pt-3">
                      Service Category Details
                    </h3>

                    <div className="card-body">
                      <table
                        class="table table-bordered table-striped table-responsive-md table-responsive-sm"
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      >
                        <thead>
                          <tr>
                            {headers.map((row) => {
                              return <th key={row.key}>{row.label}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {/* for displaying category data : use loop*/}
                          {serviceCategoryData.map((singleCategory) => {
                            return (
                              <tr>
                                <td>{singleCategory.serviceCategoryName}</td>
                                <td>{singleCategory.serviceCategoryDesc}</td>
                                <td>{singleCategory.createdAt}</td>
                                {/* <td> */}
                                {/* <img
                              src={
                                "http://localhost:90/" + singleCategory.image
                              }
                              alt=""
                              className="img-fluid"
                            />
                          </td> */}

                                <Link
                                  to={`/update-service-category/${singleCategory._id}`}
                                  className="d-flex"
                                >
                                  <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                </Link>
                                <span
                                  onClick={() =>
                                    deleteCategory(singleCategory._id)
                                  }
                                  style={{ cursor: "pointer" }}
                                  className="d-flex"
                                >
                                  <i className="bi bi-trash-fill fa-2x text-danger"></i>
                                </span>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <h1>{msg}</h1>
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

export default AdminServiceCategory;
